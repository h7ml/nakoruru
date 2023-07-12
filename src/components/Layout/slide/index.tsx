/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-07-10 22:58:11
 * @lastModified  2023-07-10 22:58:11
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-07-10 22:58:11
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-11 07:19:46
 * @FilePath: \src\components\Layout\slide\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { memo } from 'react'
import { Drawer } from 'antd'
import { useUpdateEffect } from 'react-use'

import SlideMenu from './menus'
import { IconBuguang } from '@/assets/icons/buguang'
import { useGlobalStore } from '@/store'
import { usePCScreen } from '@/hooks'
import { defaultSetting } from '@/default-setting'

function SlideIndex() {
  const isPC = usePCScreen()

  const { collapsed, setCollapsed } = useGlobalStore()

  useUpdateEffect(() => {
    if (!isPC) {
      setCollapsed(true)
    } else {
      setCollapsed(false)
    }
  }, [isPC])

  function renderMenu() {
    return <SlideMenu />
  }

  if (!isPC) {
    return (
      <Drawer
        open={!collapsed}
        footer={null}
        placement="left"
        width={defaultSetting.slideWidth}
        className="bg-primary"
        zIndex={10001}
        closable={false}
        title={
          <div
            className="flex items-center gap-[4px] text-[20px] justify-center"
            style={{ width: defaultSetting.slideWidth }}
          >
            <IconBuguang className="text-blue-500" />
            <h1 className="text-primary font-bold text-[22px]">nakoruru</h1>
          </div>
        }
        headerStyle={{ padding: '24px 0', border: 'none' }}
        bodyStyle={{ padding: '0 16px' }}
        onClose={() => {
          setCollapsed(true)
        }}
      >
        {renderMenu()}
      </Drawer>
    )
  }

  return (
    <div
      style={{ width: collapsed ? 112 : defaultSetting.slideWidth }}
      className="color-transition top-[80px] fixed box-border left-0 bottom-0 overflow-y-auto px-[16px] bg-primary <lg:hidden"
    >
      {renderMenu()}
    </div>
  )
}

export default memo(SlideIndex)
