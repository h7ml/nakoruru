/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-06 23:15:22
 * @lastModified  2023-05-08 11:02:21
 * Copyright © www.h7ml.cn All rights reserved
 */
type NodeType = 'input' | 'default' | 'output';

export type Node = {
  id: string,
  type: NodeType,
  data: {
    label: string | JSX.Element,
    // other data
  },
  position: {
    x: number,
    y: number,
  },
  style?: {
    background?: string,
    color?: string,
    border?: string,
    width?: number,
  },
};

export const nodes: Node[] = [
  // nodes data
];


export interface ReactFlowNodeProps {
  initialNodes: Node[]
}