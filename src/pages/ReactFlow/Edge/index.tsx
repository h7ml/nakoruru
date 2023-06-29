/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-09 16:38:57
 * @lastModified  2023-05-09 17:13:56
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-09 16:38:57
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-09 17:13:50
 * @FilePath: \nakoruru\src\pages\ReactFlow\Edge\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { edges, nodes } from './mock'
import { ReactFlowNode } from '@/components/ReactFlow/Node/index'

console.log(
  '%c [  nodes, edges ]-19',
  'font-size:13px; background:pink; color:#bf2c9f;',
  nodes,
  edges,
)
export function Edge() {
  return <ReactFlowNode initialNodes={nodes} initialEdges={edges} />
}

export default Edge
