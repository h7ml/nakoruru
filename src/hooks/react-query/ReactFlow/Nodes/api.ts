/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-06-30 11:18:43
 * @lastModified  2023-07-11 06:40:52
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-06-30 11:18:43
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-11 06:40:52
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { request } from '@/utils/request'
import apis from '@/server/constants/api.swagger-constants'
async function getList() {
  return request(apis.apiReactFlowNodesGet)
}
export const NodesApi = { getList }
