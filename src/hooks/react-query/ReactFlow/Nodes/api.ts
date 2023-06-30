/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-06-30 11:18:43
 * @lastModified  2023-06-30 11:43:13
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-06-30 11:18:43
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-06-30 17:33:22
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { request } from '@/utils/request'
import apis from '@/server/constants/api.swagger-constants'
async function getList() {
  return request(apis.reactFlowNodesGet)
}
export const NodesApi = { getList }
