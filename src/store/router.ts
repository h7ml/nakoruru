/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-08 22:03:05
 * @lastModified  2023-06-29 14:30:51
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-08 22:03:05
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-06-10 09:25:24
 * @FilePath: \nakoruru\src\store\router.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */

import type { RouteObject } from 'react-router-dom'
import { atom } from 'recoil'
import { routes } from '@/router/plop'

export const selectedTabState = atom({
  key: 'selectedTabState',
  default: '/',
})

export const navState = atom<RouteObject[]>({
  key: 'navState',
  default: routes,
})
