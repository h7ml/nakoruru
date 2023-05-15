/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-07 13:01:07
 * @lastModified  2023-05-09 14:33:25
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-07 13:01:07
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-09 14:33:19
 * @FilePath: \nakoruru\src\router\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { lazy, Suspense } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import { Loading } from "@/components";
import LazyRouter from "./LazyRouter";
import { useSetRecoilState } from "recoil";
import { navState } from "@/store";
import NotFound from "@/pages/NotFound";

const Home = lazy(() => import("@/pages/Home"));
const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Home />
      </Suspense>
    ),
  },
  ...LazyRouter(),
  {
    path: "*",
    element: <NotFound />,
  },
];

export default function Router() {
  const SetNavState = useSetRecoilState(navState);
  const element = useRoutes(routes);
  SetNavState(routes);
  return element;
}
