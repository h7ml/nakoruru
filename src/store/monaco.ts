/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-08 10:45:48
 * @lastModified  2023-05-08 10:54:57
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-08 10:45:48
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-09 10:30:35
 * @FilePath: \nakoruru\src\store\monaco.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */

import { atom } from 'recoil';
const storeName = 'Monaco';

export const FlowJson = atom<[]>({
  key: `${storeName}_FlowJson`,
  default: []
})