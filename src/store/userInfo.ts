/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-29 22:30:39
 * @lastModified  2023-07-10 20:51:38
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-29 22:30:39
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-10 20:51:38
 * @FilePath: \src\store\userInfoState.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface InfoState {
  userInfo: Record<string, any> | null
  setUserInfo: (info: InfoState['userInfo']) => void
}

export const userInfoState = create<InfoState>()(
  persist(
    (set) => ({
      userInfo: null,
      setUserInfo: (userInfo) => set(() => ({ userInfo })),
    }),
    { name: 'userInfo' },
  ),
)
