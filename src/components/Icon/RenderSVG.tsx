/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-07-13 01:35:05
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-13 01:35:22
 * @FilePath: \src\components\Icon\RenderSVG.tsx
 * @Description:
 *
 * Copyright (c) 2023 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import React, { useEffect, useRef } from 'react'

interface RenderSVGProps {
  svgContent: string
}

export function RenderSVG({ svgContent }: RenderSVGProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = svgContent
    }
  }, [svgContent])

  return <div ref={containerRef} />
}

export default RenderSVG
