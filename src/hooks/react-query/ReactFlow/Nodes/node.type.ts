/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-06-30 11:41:10
 * @lastModified  2023-06-30 11:41:12
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-06-30 11:41:10
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-06-30 11:41:11
 * @FilePath: /EasyTwin/Users/dtstack/Desktop/yunhu/nakoruru/src/hooks/react-query/ReactFlow/Nodes/node.type.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
export interface Root {
  success: boolean
  cmd: string
  response: Response
  responseTime: string
}

export interface Response {
  code: number
  data: Daum[]
  message: string
}

export interface Daum {
  id: string
  type: string
  data: Data
  position: Position
}

export interface Data {
  label: string
}

export interface Position {
  x: number
  y: number
}
