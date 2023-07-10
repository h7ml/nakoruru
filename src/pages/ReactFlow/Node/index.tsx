/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-07 23:47:07
 * @lastModified  2023-05-08 11:02:50
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-07 23:47:07
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-10 21:15:25
 * @FilePath: \src\pages\ReactFlow\Node\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { ReactFlowNode } from '@/components/ReactFlow/Node/index'
import { useFlowJsonStore } from '@/store'

export default function Home() {
  const { flowJson } = useFlowJsonStore()
  return <>{flowJson ? <ReactFlowNode initialNodes={flowJson} /> : <p>initialNodes is error</p>}</>
}
