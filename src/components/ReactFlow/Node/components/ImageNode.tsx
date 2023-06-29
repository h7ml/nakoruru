/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-12 23:55:28
 * @lastModified  2023-05-12 23:58:54
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-12 23:55:28
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-13 00:35:11
 * @FilePath: \nakoruru\src\components\ReactFlow\Node\components\ImageNode.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import React from 'react'
import { Handle } from 'react-flow-renderer'

export function ImageNode({ data }) {
  console.log('%c [ data ]-21', 'font-size:13px; background:pink; color:#bf2c9f;', data)

  const clicked = () => {
    window.open(data.link, '_blank') // to open new page
  }

  return (
    <div
      style={{
        borderRadius: 16,
        backgroundImage: `url(${data.imagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: data.height,
        width: data.width,
      }}
      onClick={data.link ? () => clicked() : null}
    >
      <Handle type="target" position="left" style={{ borderRadius: 0 }} />
      {data.label ? (
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            padding: 16,
            fontWeight: 700,
          }}
        >
          {data.label}
          {data.link ? <span> 🔗</span> : null}
        </div>
      ) : null}
      <Handle type="source" position="right" id="b" style={{ borderRadius: 0 }} />
    </div>
  )
}

export default ImageNode
