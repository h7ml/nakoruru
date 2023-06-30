/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-09 16:38:57
 * @lastModified  2023-06-30 12:06:09
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-09 16:38:57
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-06-30 12:06:09
 * @FilePath: /EasyTwin/Users/dtstack/Desktop/yunhu/nakoruru/src/pages/ReactFlow/Edge/index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { useEffect } from 'react'
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
} from 'react-flow-renderer'
import { Button } from 'antd'
import { UseEdges, UseNodes } from '@/hooks'

export function Edge() {
  const { useNodesQuery } = UseNodes()
  const { useEdgesQuery } = UseEdges()
  const createNodesReq = useNodesQuery()
  const createEdgesReq = useEdgesQuery()
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const handleCreateProjectClick = () => {
    createNodesReq(
      {},
      {
        onSuccess: (node) => {
          setNodes(node)
        },
      },
    )
    createEdgesReq(
      {},
      {
        onSuccess: (edge) => {
          setEdges(edge)
        },
      },
    )
  }
  useEffect(() => {
    handleCreateProjectClick()
  }, [])
  return (
    <>
      <Button type="primary" shape="circle" onClick={handleCreateProjectClick}>
        刷新
      </Button>
      <div className="w-full h-[calc(100vh-134px)]">
        <ReactFlow
          defaultNodes={nodes}
          className="react-flow-node-resizer-example"
          minZoom={0.2}
          maxZoom={4}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
        >
          <MiniMap />
          <Background variant={BackgroundVariant.Dots} />
          <Controls />
        </ReactFlow>
      </div>
    </>
  )
}

export default Edge
