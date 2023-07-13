/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-22 12:57:40
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-14 00:28:20
 * @FilePath: \src\router\plop.tsx
 * @Description:
 * @doc https://www.pipipi.net/27853.html 手把手教你React-Router6【万字详细长文】

 * @doc  https://zhuanlan.zhihu.com/p/431389907  react-router-dom使用指南（最新V6.0.1）

 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { Suspense, lazy } from 'react'
import { type RouteObject, createBrowserRouter } from 'react-router-dom'
import LazyRouter from './LazyRouter'
import { Loading } from '@/components'
import NotFound from '@/pages/NotFound'
import BasicLayout from '@/components/Layout/BasicLayout'

/* pages add */ const Table = lazy(() => import('@/pages/Table'))
const User = lazy(() => import('@/pages/User'))
const ThreeScene = lazy(() => import('@/pages/ThreeScene'))
const Babylon = lazy(() => import('@/pages/Babylon'))
const Hotapi = lazy(() => import('@/pages/Hotapi'))
const Login = lazy(() => import('@/pages/Login'))
const Tree = lazy(() => import('@/pages/Tree'))
const Flow = lazy(() => import('@/pages/Flow'))
// const Home = lazy(() => import('@/pages/Home'))
type ExtendedRouteObject = RouteObject & { hidden?: boolean }

export const routes: ExtendedRouteObject[] = createBrowserRouter([
  {
    path: '/',
    element: <BasicLayout />,
    children: [
      // {
      //   path: '/',
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <Home />
      //     </Suspense>
      //   ),
      // },
      ...LazyRouter(),
      {
        path: '/tree',
        element: (
          <Suspense fallback={<Loading />}>
            <Tree />
          </Suspense>
        ),
        children: [
          {
            path: '/tree/page1',
            element: (
              <Suspense fallback={<Loading />}>
                <div>this is page1</div>
              </Suspense>
            ),
          },
        ],
      },
      {
        path: '/tree/page1/:id',
        element: (
          <Suspense fallback={<Loading />}>
            <div>this is page1 </div>
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
        path: '/table',
        element: (
          <Suspense fallback={<Loading />}>
            <Table />
          </Suspense>
        ),
      },
      {
        path: '/user',
        element: (
          <Suspense fallback={<Loading />}>
            <User />
          </Suspense>
        ),
      },
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
]) as unknown as ExtendedRouteObject[]
