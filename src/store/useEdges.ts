/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-09 16:52:16
 * @lastModified  2023-07-10 20:45:38
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-09 16:52:16
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-10 20:45:38
 * @FilePath: \src\store\flow.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { initEdge } from '@/mooks'
import type { Edge } from '@/types'

const EdgesName = 'edges'

interface EdgesState {
  edgesJson: Edge[]
  setEdgesJson: (edges: Edge[]) => void
}

export const useEdgesStore = create<EdgesState>()(
  persist(
    (set) => ({
      edgesJson: initEdge,
      setEdgesJson: (edges) => set(() => ({ edgesJson: edges })),
    }),
    { name: 'edges' },
  ),
)
