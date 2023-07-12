/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-29 21:49:32
 * @lastModified  2023-07-10 20:46:57
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-29 21:49:32
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-10 23:00:41
 * @FilePath: \src\store\useGlobal.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

interface State {
  darkMode: boolean
  collapsed: boolean
  lang: string
  token: string
  refreshToken: string
}
interface Action {
  setDarkMode: (darkMode: State['darkMode']) => void
  setCollapsed: (collapsed: State['collapsed']) => void
  setLang: (lang: State['lang']) => void
  setToken: (lang: State['token']) => void
  setRefreshToken: (lang: State['refreshToken']) => void
}

export const useGlobalStore = create<State & Action>()(
  devtools(
    persist(
      (set) => {
        return {
          darkMode: false,
          collapsed: false,
          lang: 'zh',
          token: '',
          refreshToken: '',
          setDarkMode: (darkMode: State['darkMode']) =>
            set({
              darkMode,
            }),
          setCollapsed: (collapsed: State['collapsed']) =>
            set({
              collapsed,
            }),
          setLang: (lang: State['lang']) =>
            set({
              lang,
            }),
          setToken: (token: State['token']) =>
            set({
              token,
            }),
          setRefreshToken: (refreshToken: State['refreshToken']) =>
            set({
              refreshToken,
            }),
        }
      },
      {
        name: 'globalStore',
        storage: createJSONStorage(() => localStorage),
      },
    ),
    { name: 'globalStore' },
  ),
)
