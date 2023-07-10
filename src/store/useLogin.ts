/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-23 22:09:16
 * @lastModified  2023-07-10 20:46:50
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-23 22:09:16
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-10 20:46:45
 * @FilePath: \src\store\user.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Info = Record<string, any> | null

interface LoginState {
  userInfo: Info
  setUserInfo: (info: Info) => void
}

export const useLoginStore = create<LoginState>()(
  persist(
    (set) => ({
      userInfo: null,
      setUserInfo: (info) => set(() => ({ userInfo: info })),
    }),
    { name: 'userInfo' },
  ),
)
