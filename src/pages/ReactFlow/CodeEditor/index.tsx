/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-08 10:42:48
 * @lastModified  2023-05-08 13:15:57
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-08 10:42:48
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-08 13:15:57
 * @FilePath: \nakoruru\src\pages\ReactFlow\CodeEditor\index.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */
import { CodeEditor } from '@/components';
import { FlowJson } from "@/store"
import { useRecoilState } from 'recoil';
import { isPlainObject } from 'lodash-es';
export default function Home() {
  const [codeValue, setCodeValue] = useRecoilState(FlowJson);

  return <CodeEditor language="json" value={JSON.stringify(codeValue, null, 2)} onChange={(e) => {
    if (isPlainObject(e)) setCodeValue(JSON.parse(e))
  }} />
}