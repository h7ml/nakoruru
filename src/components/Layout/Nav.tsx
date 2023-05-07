/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-07 23:32:46
 * @lastModified  2023-05-07 23:56:41
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-07 23:32:46
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-07 23:56:41
 * @FilePath: \reactflow-mind-map\src\components\Layout\Nav.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */

import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">OverviewFlow</Link>
        </li>
        <li>
          <Link to="/ReactFlow/Node">ReactFlow/Node</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}