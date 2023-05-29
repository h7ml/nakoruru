/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-22 12:57:40
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-29 22:24:58
 * @FilePath: \nakoruru\src\router\plop.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */
import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";
import { Loading } from "@/components";
import LazyRouter from "./LazyRouter";
import NotFound from "@/pages/NotFound";
/* pages add */
const Login = lazy(() => import("@/pages/Login"));
const Tree = lazy(() => import("@/pages/Tree"));
const Flow = lazy(() => import("@/pages/Flow"));
const Home = lazy(() => import("@/pages/Home"));
import Main from '@/components/Layout/Main'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
    children: [
      // {
      //   path: "/",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <Home />
      //     </Suspense>
      //   ),
      // },
      ...LazyRouter(),
      /* plop add */

    ]
  },
  {
    path: '/login',
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    )
  },
  {
    path: '/tree',
    element: (
      <Suspense fallback={<Loading />}>
        <Tree />
      </Suspense>
    )
  },
  {
    path: '/flow',
    element: (
      <Suspense fallback={<Loading />}>
        <Flow />
      </Suspense>
    )
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
