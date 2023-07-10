/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-29 22:10:51
 * @lastModified  2023-07-10 20:46:30
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-29 22:10:51
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-10 20:46:30
 * @FilePath: \src\store\setting.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { create } from 'zustand'

interface VisibleState {
  visible: boolean
  toggleVisibility: () => void
}

export const useVisibleState = create<VisibleState>()((set) => ({
  visible: false,
  toggleVisibility: () => set((state) => ({ visible: !state.visible })),
}))
