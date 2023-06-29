/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-08 10:42:48
 * @lastModified  2023-06-29 13:11:05
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-08 10:42:48
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-06-29 13:11:00
 * @FilePath: /nakoruru/src/pages/ReactFlow/CodeEditor/index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { useRecoilState } from 'recoil'
import { isPlainObject } from 'lodash-es'
import { CodeEditor } from '@/components'
import { FlowJson } from '@/store'

export default function Home() {
  const [codeValue, setCodeValue] = useRecoilState(FlowJson)

  return (
    <CodeEditor
      height={`93vh`}
      language="json"
      value={JSON.stringify(codeValue, null, 2)}
      onChange={(e) => {
        if (e && isPlainObject(e)) {
          setCodeValue(JSON.parse(e))
        }
      }}
    />
  )
}
