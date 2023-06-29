/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-09 18:55:40
 * @lastModified  2023-05-09 19:06:46
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-09 18:55:40
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-09 20:13:01
 * @FilePath: \nakoruru\src\pages\ReactFlow\components\Sidebar.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { Button } from 'antd'
import React from 'react'

export const Sidebar: React.FC = () => {
  // 获取画布上的节点
  const onDragStart = (evt: React.DragEvent, nodeType: string) => {
    // 记录被拖拽的节点类型
    evt.dataTransfer.setData('application/reactflow', nodeType)
    evt.dataTransfer.effectAllowed = 'move'
  }

  return (
    <aside>
      <Button type="dashed" onDragStart={(event) => onDragStart(event, 'input')} draggable>
        Input Node
      </Button>
      <Button
        type="dashed"
        className="m-6 ml-0"
        onDragStart={(event) => onDragStart(event, 'default')}
        draggable
      >
        Default Node
      </Button>
      <Button type="dashed" onDragStart={(event) => onDragStart(event, 'output')} draggable>
        Output Node
      </Button>
    </aside>
  )
}
