import React, { useState } from 'react';
import { RecoilLogger } from 'recoil-devtools-logger'
import LogMonitor from 'recoil-devtools-log-monitor'
import DockMonitor from 'recoil-devtools-dock'
import classnames from 'classnames';
import { Button } from 'antd';
import { useKey } from 'react-use';
import { isCtrlKey } from '@/utils';
export const RecoilDevtools = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }
  useKey(
    (e) => isCtrlKey(e) && e.code === 'KeyH',
    toggleVisibility,
    undefined,
    [toggleVisibility],
  );
  return (
    <>
      <Button onClick={toggleVisibility}>Toggle Devtools Visibility</Button>
      <div className={classnames(
        isVisible ? "block" : 'hidden'
      )}>
        <RecoilLogger />
        <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q" changeMonitorKey="ctrl-m" defaultIsVisible>
          <LogMonitor markStateDiff />
        </DockMonitor >
      </div>
    </>
  )
}
