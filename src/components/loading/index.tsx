/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-07-10 23:02:45
 * @lastModified  2023-07-10 23:02:45
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-07-10 23:02:45
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-10 23:02:55
 * @FilePath: \src\components\loading\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { Spin } from 'antd'
import NProgress from 'nprogress'
import { useEffect } from 'react'

export function Loading() {
  useEffect(() => {
    NProgress.start()

    return () => {
      NProgress.done()
    }
  }, [])

  return (
    <div className="flex justify-center">
      <Spin />
    </div>
  )
}
