/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-06 23:15:22
 * @lastModified  2023-06-29 12:42:08
 * Copyright © www.h7ml.cn All rights reserved
 */
import type { Edge, EdgeTypes } from 'react-flow-renderer'

type NodeType = 'input' | 'default' | 'output' | undefined

export interface Node {
  id: string
  type: NodeType
  data: {
    label: string | JSX.Element
    // other data
  }
  position: {
    x: number
    y: number
  }
  style?: {
    background?: string
    color?: string
    border?: string
    width?: number
  }
}

export const nodes: Node[] = [
  // nodes data
]

const edges: EdgeTypes[] = []

export interface ReactFlowNodeProps {
  initialNodes: Node[]
  initialEdges: Edge[]
  onNodesChange?: (nodes: Node[]) => void
  onEdgesChange?: (edges: Edge[]) => void
}
