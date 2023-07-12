/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-07-11 06:24:54
 * @lastModified  2023-07-11 06:24:59
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-07-11 06:24:54
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-11 06:24:59
 * @FilePath: \src\hooks\usePCScreen\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { useMedia } from 'react-use'

export const usePCScreen = () => {
  const isPC = useMedia('(min-width: 1024px)')
  return isPC
}
