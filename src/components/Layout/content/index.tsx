/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-07-10 22:57:17
 * @lastModified  2023-07-10 22:57:17
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-07-10 22:57:17
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-11 07:26:15
 * @FilePath: \src\components\Layout\content\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import type { FC } from 'react'
import { Suspense } from 'react'
import { Loading } from '@/components/loading'
import { defaultSetting } from '@/default-setting'
import { usePCScreen } from '@/hooks'
import { useGlobalStore } from '@/store'

const Content: FC<any> = ({ children }) => {
  const isPC = usePCScreen()

  const { collapsed } = useGlobalStore()

  return (
    <div
      className="color-transition mt-[80px] w-[100%] bg-container !<lg:ml-[16px]"
      style={{
        borderRadius: '8px',
        marginLeft: collapsed ? 112 : defaultSetting.slideWidth,
        minHeight: 'calc(100vh - 80px)',
        transition: 'all 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
        width: `calc(100vw - ${isPC ? (collapsed ? 112 : defaultSetting.slideWidth) : 32}px)`,
      }}
    >
      <div className="m-0 rounded-md z-1 p-[16px]">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </div>
  )
}

export default Content
