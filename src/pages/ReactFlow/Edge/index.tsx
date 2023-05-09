/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-09 16:38:57
 * @lastModified  2023-05-09 16:58:05
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-09 16:38:57
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-09 16:58:05
 * @FilePath: \nakoruru\src\pages\ReactFlow\Edge\index.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */
import { ReactFlowNode } from '@/components/ReactFlow/Node/index';
import { FlowJson, edgesJson } from '@/store';
import { useRecoilValue } from 'recoil';
export function Edge() {
  const initialNodes = useRecoilValue(FlowJson);
  const EdgesJson = useRecoilValue(edgesJson);
  return (
    <>
      {initialNodes ?
        <ReactFlowNode initialNodes={initialNodes} initialEdges={EdgesJson} />
        : <p>initialNodes is error</p>
      }
    </>
  );
}

export default Edge