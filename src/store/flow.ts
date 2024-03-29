/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-09 16:52:16
 * @lastModified  2023-05-09 16:54:01
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-09 16:52:16
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-09 16:54:01
 * @FilePath: \nakoruru\src\store\flow.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { atom } from "recoil";
const EdgesName = "edges";

export const edgesJson = atom<[]>({
  key: `${EdgesName}_Json`,
  default: [],
});
