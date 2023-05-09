/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-08 22:03:05
 * @lastModified  2023-05-08 22:32:54
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-08 22:03:05
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-08 22:32:54
 * @FilePath: \nakoruru\src\store\router.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */

import { atom } from "recoil";

export const selectedTabState = atom({
  key: 'selectedTabState',
  default: '/'
});

export const navState = atom<unknown>({
  key: 'navState',
  default: [],
});