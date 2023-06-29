/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-22 12:57:40
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-06-29 13:00:54
 * @FilePath: /nakoruru/src/router/plop.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { Suspense, lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import LazyRouter from './LazyRouter'
import { Loading } from '@/components'
import NotFound from '@/pages/NotFound'
import Main from '@/components/Layout/Main'

/* pages add */
const ThreeScene = lazy(() => import('@/pages/ThreeScene'))
const Babylon = lazy(() => import('@/pages/Babylon'))
const Hotapi = lazy(() => import('@/pages/Hotapi'))
const Login = lazy(() => import('@/pages/Login'))
const Tree = lazy(() => import('@/pages/Tree'))
const Flow = lazy(() => import('@/pages/Flow'))
const Home = lazy(() => import('@/pages/Home'))
type ExtendedRouteObject = RouteObject & { hidden?: boolean }

export const routes: ExtendedRouteObject[] = [
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      ...LazyRouter(),
      {
        path: '/tree',
        element: (
          <Suspense fallback={<Loading />}>
            <Tree />
          </Suspense>
        ),
      },
      {
        path: '/flow',
        element: (
          <Suspense fallback={<Loading />}>
            <Flow />
          </Suspense>
        ),
      },
      /* plop add */
      {
        path: '/three-scene',
        element: (
          <Suspense fallback={<Loading />}>
            <ThreeScene />
          </Suspense>
        ),
      },
      {
        path: '/babylon',
        element: (
          <Suspense fallback={<Loading />}>
            <Babylon />
          </Suspense>
        ),
      },
      {
        path: '/hotapi',
        element: (
          <Suspense fallback={<Loading />}>
            <Hotapi />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/login',
    hidden: true,
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: '*',
    hidden: true,
    element: <NotFound />,
  },
]
