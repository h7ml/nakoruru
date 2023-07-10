/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-08 10:45:48
 * @lastModified  2023-07-10 20:46:15
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-08 10:45:48
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-10 21:13:14
 * @FilePath: \src\store\useFlowJsonStore.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */

import { create } from 'zustand'
import { initialNodes } from '@/mooks'
import type { Nodes } from '@/types'

interface FlowJsonState {
  flowJson: Nodes
  setFlowJson: (flowJson: Nodes) => void
}

export const useFlowJsonStore = create<FlowJsonState>((set) => ({
  flowJson: initialNodes,
  setFlowJson: (flowJson) => set(() => ({ flowJson })),
}))
