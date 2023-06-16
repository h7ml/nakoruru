/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-22 12:57:40
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-06-10 09:39:06
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
const Babylon = lazy(() => import("@/pages/Babylon"));
const Hotapi = lazy(() => import("@/pages/Hotapi"));
const Login = lazy(() => import("@/pages/Login"));
const Tree = lazy(() => import("@/pages/Tree"));
const Flow = lazy(() => import("@/pages/Flow"));
const Home = lazy(() => import("@/pages/Home"));
import Main from "@/components/Layout/Main";
type ExtendedRouteObject = RouteObject & { hidden?: boolean };

export const routes: ExtendedRouteObject[] = [
  {
    path: "/",
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
      {
        path: "/tree",
        element: (
          <Suspense fallback={<Loading />}>
            <Tree />
          </Suspense>
        ),
      },
      {
        path: "/flow",
        element: (
          <Suspense fallback={<Loading />}>
            <Flow />
          </Suspense>
        ),
      },
      /* plop add */
      {
        path: "/babylon",
        element: (
          <Suspense fallback={<Loading />}>
            <Babylon />
          </Suspense>
        ),
      },
      {
        path: "/hotapi",
        element: (
          <Suspense fallback={<Loading />}>
            <Hotapi />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    hidden: true,
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "*",
    hidden: true,
    element: <NotFound />,
  },
];
