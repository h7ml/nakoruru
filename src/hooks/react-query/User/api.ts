/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-07-03 05:10:21
 * @lastModified  2023-07-03 05:14:08
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-07-03 05:10:21
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-03 05:14:05
 * @FilePath: \src\hooks\react-query\User\api.ts
 * @Description:
 *
 * Copyright (c) 2023 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { request } from '@/utils/request'
import apis from '@/server/constants/api.swagger-constants'
async function getUserList() {
  return request('GET /api/system/user')
}
export const UserApi = { getUserList }
