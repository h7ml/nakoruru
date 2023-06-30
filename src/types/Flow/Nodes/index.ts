/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-06 23:15:22
 * @lastModified  2023-06-29 14:26:42
 * Copyright © www.h7ml.cn All rights reserved
 */
import type { Edge } from 'reactflow'

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

export type Nodes = Root2[]

export interface Root2 {
  id: string
  type: string
  data: Data
  position: Position
  style: Style
}

export interface Data {
  label: string
}

export interface Position {
  x: number
  y: number
}

export interface Style {
  background: string
  border: string
  borderRadius: number
  fontSize: number
  padding?: number
  height?: number
}

export const nodes: Node[] = [
  // nodes data
]

export interface ReactFlowNodeProps {
  initialNodes: Node[]
  initialEdges: Edge[]
  onNodesChange?: (nodes: Node[]) => void
  onEdgesChange?: (edges: Edge[]) => void
}
