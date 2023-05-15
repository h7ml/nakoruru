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
 * @LastEditTime: 2023-05-08 11:19:15
 * @FilePath: \nakoruru\src\pages\ReactFlow\Node\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { ReactFlowNode } from "@/components/ReactFlow/Node/index";
import { FlowJson } from "@/store";
import { useRecoilValue } from "recoil";
export default function Home() {
  const initialNodes = useRecoilValue(FlowJson);
  return (
    <>
      {initialNodes ? (
        <ReactFlowNode initialNodes={initialNodes} />
      ) : (
        <p>initialNodes is error</p>
      )}
    </>
  );
}
