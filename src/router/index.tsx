/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-07 13:01:07
 * @lastModified  2023-05-22 12:59:40
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-07 13:01:07
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-06-10 09:03:12
 * @FilePath: \nakoruru\src\router\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { useSetRecoilState } from "recoil";
import { useRoutes } from "react-router-dom";
import { navState } from "@/store";
import { routes } from "./plop";

export default function Router() {
  const SetNavState = useSetRecoilState(navState);
  const element = useRoutes(routes);
  SetNavState(routes);
  return element;
}
