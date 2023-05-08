/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-07 13:01:07
 * @lastModified  2023-05-08 10:38:08
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-07 13:01:07
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-08 10:38:08
 * @FilePath: \reactflow-mind-map\src\router\index.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */
import { lazy, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { Loading } from '@/components';
import LazyRouter from "./LazyRouter"

const Home = lazy(() => import('@/pages/Home'));
const routes: RouteObject[] = [
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
    path: '*',
    element: <div>Not Found</div>,
  },
];

export default function Router() {
  const element = useRoutes(routes);
  return element;
}
