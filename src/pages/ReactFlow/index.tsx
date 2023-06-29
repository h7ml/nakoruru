/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-08 22:17:24
 * @lastModified  2023-06-29 12:47:01
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-08 22:17:24
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-06-29 12:46:59
 * @FilePath: /nakoruru/src/pages/ReactFlow/index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { useCallback, useRef, useState } from 'react'
import type { Connection, Edge } from 'react-flow-renderer'
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  MarkerType,
  MiniMap,
  ReactFlowProvider,
  addEdge,
  useEdgesState,
  useNodesState,
} from 'react-flow-renderer'
import { Sidebar } from './components'
import { uuid } from '@/utils'

export default function ReactFlowInfo() {
  const reactFlowWrapper = useRef<HTMLDivElement>(null)
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [reactFlowInstance, setReactFlowInstance] = useState(null)

  const onConnect = useCallback(
    (params: Edge<any> | Connection) =>
      setEdges((eds) => addEdge({ ...params, markerEnd: { type: MarkerType.Arrow } }, eds)),
    [],
  )
  const onDragOver = useCallback(
    (event: { preventDefault: () => void; dataTransfer: { dropEffect: string } }) => {
      event.preventDefault()
      event.dataTransfer.dropEffect = 'move'
    },
    [],
  )
  const onDrop = (event: React.DragEvent) => {
    event.preventDefault()
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect()
    const type = event?.dataTransfer.getData('application/reactflow')

    if (typeof type === 'undefined' || !type) {
      return
    }
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    })
    const newNode = {
      id: uuid(),
      type,
      position,
      data: { label: `${type} node` },
    }
    setNodes((es) => es.concat(newNode))
  }

  const onNodeClick = (event: React.MouseEvent, node: Node) => {
    // const { data, id } = node
    console.log('element>>', node)
  }
  return (
    <div className="w-full h-full flex">
      <ReactFlowProvider>
        <div className="left w-[120px]">
          <Sidebar />
        </div>
        <div ref={reactFlowWrapper} className="flex-1 h-[calc(100vh-134px)]">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={(e, n) => {
              onNodeClick(e, n)
            }}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            defaultZoom={1.0}
            minZoom={1}
            maxZoom={1.5}
          >
            <MiniMap
              nodeStrokeColor={(n) => {
                if (n.type === 'input') return '#0041d0'
                if (n.type === 'default') return 'pink'
                if (n.type === 'output') return '#ff0072'
                return '#eee'
              }}
              nodeColor={(n) => {
                if (n.type === 'input') return '#0041d0'
                if (n.type === 'default') return 'pink'
                if (n.type === 'output') return '#ff0072'
                return '#eee'
              }}
            />
            <Background variant={BackgroundVariant.Dots} />
            <Controls />
          </ReactFlow>
        </div>
      </ReactFlowProvider>
    </div>
  )
}
