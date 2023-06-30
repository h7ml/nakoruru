/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-09 16:38:57
 * @lastModified  2023-06-30 16:11:34
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-09 16:38:57
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-06-30 17:39:05
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { useCallback, useEffect, useRef, useState } from 'react'
import type { Connection } from 'reactflow'
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  useEdgesState,
  useNodesState,
} from 'reactflow'
import { Button } from 'antd'
import classnames from 'classnames'
import style from './style.module.less'
import { useFlowNodesApi } from '@/hooks/query-server/ReactFlowServer'

export function Edge() {
  const NODE_COLORS = {
    input: 'blue',
    output: 'green',
    default: 'red',
  }
  const connectionLineStyle = { stroke: '#fff' }
  const dragged = useRef(false)
  const { FlowNodes, refreshFlowEdges } = useFlowNodesApi()
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [selectFlowNodes, setSelectFlowNodes] = useState<any>([])
  const [selecteFlowEdge, setSelecteFlowEdge] = useState<any>()
  const getMiniMapNodeColor = useCallback((node: { type: 'blue' | 'green' | 'red' }) => {
    return NODE_COLORS[node.type] || '#eee'
  }, [])
  useEffect(() => {
    if (FlowNodes) {
      const nodes = FlowNodes?.map((nd: any) => {
        const data = {
          ...nd,
          style: {
            stroke: '#fff',
            cursor: 'pointer',
            strokeWidth: 3,
            color: getMiniMapNodeColor(nd),
          },
        }
        return data
      })

      setNodes(nodes)
    }
  }, [FlowNodes, getMiniMapNodeColor, setNodes])

  const handleNodeConnect = useCallback((connection: Connection) => {
    console.log(
      '%c [ connection ]-72',
      'font-size:13px; background:pink; color:#bf2c9f;',
      connection,
    )
  }, [])
  const handleOnNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    event.stopPropagation()
    console.log(
      '%c [ handleOnNodeClick ]-81',
      'font-size:13px; background:pink; color:#bf2c9f;',
      node,
    )
  }, [])

  const onNodeDrag = useCallback(() => {
    dragged.current = true
  }, [])

  const handleChangeNodesPosition = useCallback((event: React.MouseEvent, node: Node) => {
    if (dragged.current) {
      dragged.current = false
      console.log(
        '%c [ handleChangeNodesPosition ]-95',
        'font-size:13px; background:pink; color:#bf2c9f;',
        node,
      )
    }
  }, [])

  const handleChangeNodes = useCallback((changedNodes: Node) => {
    console.log(
      '%c [ changedNodes ]-105',
      'font-size:13px; background:pink; color:#bf2c9f;',
      changedNodes,
    )
  }, [])
  const handleOnEdgeClick = useCallback(
    (e: { stopPropagation: () => void }, edge: React.SetStateAction<any>) => {
      e.stopPropagation()
      setSelecteFlowEdge(edge)
    },
    [],
  )

  const handleOnClick = useCallback(() => {
    setSelectFlowNodes([])
    setSelecteFlowEdge(undefined)
  }, [])

  return (
    <>
      <Button type="primary" shape="circle" onClick={refreshFlowEdges}>
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
          onClick={handleOnClick}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={handleOnNodeClick}
          onNodeDrag={onNodeDrag}
          onNodeDragStop={handleChangeNodesPosition}
          onEdgeClick={handleOnEdgeClick}
          onSelectionChange={({ nodes }) => setSelectFlowNodes(nodes)}
          onSelectionDragStop={(e, nodes) => handleChangeNodes(nodes)}
          fitView
          onlyRenderVisibleElements
          snapToGrid
          connectionLineStyle={connectionLineStyle}
          attributionPosition="top-right"
          snapGrid={[25, 25]}
          onConnect={handleNodeConnect}
        >
          <MiniMap
            zoomable
            pannable
            className={classnames(
              'transition-all ease-in-out duration-300 right-0 pointer-events-auto',
              style['mini-map'],
            )}
            nodeColor={getMiniMapNodeColor}
            nodeBorderRadius={2}
            style={{
              border: '1px solid black',
            }}
          />
          <Background
            variant={BackgroundVariant.Dots}
            style={{
              backgroundSize: 'contain',
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center',
            }}
          />
          <Controls
            className={classnames(
              'transition-all ease-in-out duration-300 right-84px w-25px',
              style['controls-button'],
            )}
          />
        </ReactFlow>
      </div>
    </>
  )
}

export default Edge
