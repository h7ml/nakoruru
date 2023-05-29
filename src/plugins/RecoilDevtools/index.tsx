import React, { useState } from "react";
import { RecoilLogger } from "recoil-devtools-logger";
import LogMonitor from "recoil-devtools-log-monitor";
import DockMonitor from "recoil-devtools-dock";
import classnames from "classnames";
import { useKey } from "react-use";
import { isCtrlKey } from "@/utils";
import { VisibleState } from "@/store";
export const RecoilDevtools = () => {
  const visible = VisibleState((state) => state.visible)
  const toggleVisibility = VisibleState((state) => state.toggleVisibility)
  useKey(
    (e) => isCtrlKey(e) && e.code === "KeyH",
    toggleVisibility,
    undefined,
    [toggleVisibility],
  );
  const [top, setTop] = useState(60);

  return (
    <>
      {/* <Affix offsetTop={top}>
        <Button className="absolute" onClick={toggleVisibility}>Toggle Devtools Visibility</Button>
      </Affix> */}


      <div className={classnames(visible ? "block" : "hidden")}>
        <RecoilLogger />
        <DockMonitor
          toggleVisibilityKey="ctrl-h"
          changePositionKey="ctrl-q"
          changeMonitorKey="ctrl-m"
          defaultIsVisible
        >
          <LogMonitor markStateDiff />
        </DockMonitor>
      </div>
    </>
  );
};
