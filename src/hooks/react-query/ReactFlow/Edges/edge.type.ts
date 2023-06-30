/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-06-30 11:41:10
 * @lastModified  2023-06-30 14:14:14
 * Copyright © www.h7ml.cn All rights reserved
 */
export interface EdgeRoot {
  success: boolean
  cmd: string
  response: Response
  responseTime: string
}

export interface EdgeResponse {
  code: number
  data: EdgeDaum[]
  message: string
}

export interface EdgeDaum {
  id: string
  source: string
  target: string
  label: string
  className: string
  type: string
  animated: boolean
  style: Style
  labelStyle: LabelStyle
  markerEnd: MarkerEnd
  labelBgPadding: number[]
  labelBgBorderRadius: number
  labelBgStyle: LabelBgStyle
}

interface Style {
  stroke: string
}

interface LabelStyle {
  fill: string
  fontWeight: number
}

interface MarkerEnd {
  type: string
}

interface LabelBgStyle {
  fill: string
  color: string
  fillOpacity: number
}
