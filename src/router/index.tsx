/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-07 13:01:07
 * @lastModified  2023-06-29 14:30:09
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-07 13:01:07
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-12 08:15:32
 * @FilePath: \src\router\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import type { RouteObject } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import { routes } from './plop'

function findNodeByPath(routes: RouteObject[], path: string) {
  for (let i = 0; i < routes.length; i += 1) {
    const element = routes[i]

    if (element.path === path) {
      return element
    }

    findNodeByPath(element.children || [], path)
  }
}

export function addRoutes(parentPath: string, routes: RouteObject[]) {
  if (!parentPath) {
    routes.push(...(routes as any))
    return
  }

  const curNode = findNodeByPath(routes, parentPath)

  if (curNode?.children) {
    curNode?.children.push(...routes)
  } else if (curNode) {
    curNode.children = routes
  }
}

export function replaceRoutes(parentPath: string, routes: RouteObject[]) {
  if (!parentPath) {
    routes.push(...(routes as any))
    return
  }

  const curNode = findNodeByPath(routes, parentPath)

  if (curNode) {
    curNode.children = routes
  }
}

export default function Router() {
  const element = useRoutes(routes)
  return element
}
