/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-06 23:17:11
 * @lastModified  2023-05-06 23:20:08
 * Copyright © www.h7ml.cn All rights reserved
 */

import { MarkerType } from "react-flow-renderer";

export type Edge = {
  id: string;
  source: string;
  target: string;
  animated?: boolean;
  label?: string;
  type?: string;
  style?: {
    stroke?: string;
  };
  labelStyle?: {
    fill?: string;
    fontWeight?: number;
  };
  markerEnd?: {
    type: MarkerType;
    // other options
  };
};

export const edges: Edge[] = [
  // edges data
];
