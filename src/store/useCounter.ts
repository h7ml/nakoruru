/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-29 21:48:54
 * @lastModified  2023-07-10 20:44:54
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-29 21:48:54
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-10 20:44:54
 * @FilePath: \src\store\useCounterStore.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { create } from 'zustand'

interface CounterState {
  counter: number
  increase: (by: number) => void
}

export const useCounterStore = create<CounterState>()((set) => ({
  counter: 0,
  increase: (by) => set((state) => ({ counter: state.counter + by })),
}))
