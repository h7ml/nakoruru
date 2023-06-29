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
 * @LastEditTime: 2023-06-29 14:30:09
 * @FilePath: /nakoruru/src/router/index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { useRoutes } from 'react-router-dom'
import { routes } from './plop'

export default function Router() {
  const element = useRoutes(routes)
  return element
}
