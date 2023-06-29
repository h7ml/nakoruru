// eslint-disable
/* tslint */
import React from 'react'
import classnames from 'classnames'

import * as monaco from 'monaco-editor'
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

import style from './style.module.less'

;(self as any).MonacoEnvironment = {
  getWorker(_: any, label: any) {
    if (label === 'json') {
      return new JsonWorker()
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new CssWorker()
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new HtmlWorker()
    }
    if (label === 'typescript' || label === 'javascript') {
      return new TsWorker()
    }
    return new EditorWorker()
  },
}

export interface CodeEditorProp {
  berforeRender?: React.ReactNode
  afterRender?: React.ReactNode
  value?: string
  language?: string
  height?: number | string
  readOnly?: boolean
  onChange?: (value?: string) => void
}

const codeEditorContainerId = 'ET_codeEditorContainerId'

let __prevent_trigger_change_event__ = false

export function CodeEditor({
  berforeRender,
  afterRender,
  value,
  language = 'javascript',
  height = '300px',
  readOnly = false,
  onChange,
}: CodeEditorProp) {
  const codeEditorRef = React.useRef<HTMLDivElement>(null)
  const [editor, setEditor] = React.useState<monaco.editor.IStandaloneCodeEditor>()

  React.useEffect(() => {
    if (!codeEditorRef.current) return

    const editor = monaco.editor.create(codeEditorRef.current, {
      value: '',
      language,
      theme: 'vs-dark',
      readOnly,
      minimap: {
        enabled: false,
      },
    })
    editor.layout()

    setEditor(editor)

    return () => {
      editor.dispose()
    }
  }, [codeEditorRef, language, readOnly])

  React.useEffect(() => {
    if (!editor) return

    const model = editor.getModel()
    if (!model) return

    __prevent_trigger_change_event__ = true

    const range = model.getFullModelRange()
    editor.pushUndoStop()
    model.pushEditOperations(
      [],
      [
        {
          range,
          text: value || '',
        },
      ],
      () => null,
    )
    editor.popUndoStop()

    __prevent_trigger_change_event__ = false
  }, [editor, value])

  React.useEffect(() => {
    if (!editor || __prevent_trigger_change_event__) return

    editor.onDidChangeModelContent(() => {
      const changedValue = editor.getValue()
      !readOnly && onChange?.(changedValue)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor, readOnly])

  return (
    <div
      className={classnames(
        'w-full flex flex-col gap-y-1 p-2 border border-borderColorMain bg-bgColorMain relative',
        style['code-editor'],
      )}
    >
      {berforeRender}
      <div
        ref={codeEditorRef}
        id={codeEditorContainerId}
        style={{
          height,
        }}
      />
      {afterRender}
    </div>
  )
}
