import React, { useState } from 'react';
import { RecoilLogger } from 'recoil-devtools-logger'
import LogMonitor from 'recoil-devtools-log-monitor'
import DockMonitor from 'recoil-devtools-dock'
import { Button } from 'antd';
export const RecoilDevtools = () => {
  const [isVisible, setIsVisible] = useState(false); // 添加一个状态用于控制 Devtools 的显示与隐藏

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <Button onClick={toggleVisibility}>Toggle Devtools Visibility</Button> {/* 添加一个按钮，用于控制 Devtools 的显示与隐藏 */}
      {isVisible && ( // 使用条件渲染控制 Devtools 的显示与隐藏
        <>
          <RecoilLogger />
          <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q" changeMonitorKey="ctrl-m" defaultIsVisible>
            <LogMonitor markStateDiff />
          </DockMonitor>
        </>
      )}
    </>
  )
}
