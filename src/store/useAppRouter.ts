/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-08 22:03:05
 * @lastModified  2023-07-10 20:48:03
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-08 22:03:05
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-10 21:26:45
 * @FilePath: \src\store\useAppRouter.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */

import { create } from 'zustand'
import type { RouteObject } from 'react-router-dom'
import { routes } from '@/router/plop'

type ExtendedRouteObject = RouteObject & { hidden?: boolean }
interface AppRouter {
  selectedTabState: string
  setSelectedTabState: (tab: string) => void
  navState: ExtendedRouteObject[]
}

export const useAppRouter = create<AppRouter>((set) => ({
  selectedTabState: '/',
  setSelectedTabState: (tab) => set(() => ({ selectedTabState: tab })),
  navState: routes,
}))
