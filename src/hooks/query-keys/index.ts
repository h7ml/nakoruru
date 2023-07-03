/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-08 23:10:49
 * @lastModified  2023-06-30 12:04:37
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-08 23:10:49
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-03 13:25:10
 * @FilePath: /Users/dtstack/Desktop/yunhu/nakoruru/src/hooks/query-keys/index.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
export const queryKeys = {
  userInfo: (query?: string) => ['userInfo', query],
  useNodes: (query?: string) => ['useNodes', query],
  useEdges: (query?: string) => ['useEdges', query],
  uses: (query?: string) => ['uses', query],
  userList: (query?: string) => ['userList', query],
  user: (id?: number, params?: any) => ['user', id, params],
}
