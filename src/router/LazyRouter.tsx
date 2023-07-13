/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-07 22:40:52
 * @lastModified  2023-05-08 20:53:34
 * Copyright © www.h7ml.cn All rights reserved
 */

import { Suspense, lazy } from 'react'
import { Loading } from '@/components'

/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-07 22:40:52
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-13 23:38:04
 * @FilePath: \nakoruru\src\router\LazyRouter.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
export default function LazyRouter() {
  const pagesString = import.meta.glob('../pages/**/index.tsx')
  const pagesModule = import.meta.glob('../pages/**/route.ts', {
    eager: true, // 改成 具体模块导出的值,在 default 下面
    import: 'default', // 配置默认就导出模块中的 default 属性
  })
  const routesInfo = Object.entries(pagesModule).map(([pagePath]) => {
    const path: string = pagePath.replace('../pages', '').replace('/route.ts', '') || '/'
    const compPath = pagePath.replace('route.ts', 'index.tsx')
    const element = routerLazyLoadingFn(lazy(pagesString[compPath]))

    return {
      path,
      element,
    }
  })

  return routesInfo
}

// 路由懒加载
function routerLazyLoadingFn(Element: React.LazyExoticComponent<React.ComponentType<any>>) {
  return (
    <Suspense fallback={Loading}>
      <Element />
    </Suspense>
  )
}
