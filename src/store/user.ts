/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-29 21:48:54
 * @lastModified  2023-07-11 06:37:23
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-29 21:48:54
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-11 06:37:24
 * @FilePath: \src\store\user.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { User } from '@/pages/User/service'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface State {
  currentUser: User | null
}

interface Action {
  setCurrentUser: (currentUser: State['currentUser']) => void
}

export const useUserStore = create<State & Action>()(
  devtools(
    (set) => {
      return {
        currentUser: null,
        setCurrentUser: (currentUser: State['currentUser']) => set({ currentUser }),
      }
    },
    { name: 'globalUserStore' },
  ),
)
