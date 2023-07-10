/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-07-10 22:58:42
 * @lastModified  2023-07-10 22:58:43
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-07-10 22:58:42
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-11 07:23:40
 * @FilePath: \src\components\Layout\slide\menus.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Menu } from 'antd';
import type { ItemType } from 'antd/es/menu/hooks/useItems';
import { Link, useMatches } from 'react-router-dom';

import { useGlobalStore, useUserStore } from '@/store';
import { antdIcons } from '@/assets/antd-icons';
export interface MenuType {
  id: string;
  parentId?: string;
  name?: string;
  icon?: string;
  type?: number;
  route?: string;
  filePath?: string;
  orderNumber?: number;
  url?: string;
  show?: boolean;
  children?: MenuType[];
  path: string;
  Component?: any;
  parentPaths?: string[];
}
const SlideMenu = () => {

  const matches = useMatches();

  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectKeys, setSelectKeys] = useState<string[]>([]);

  const {
    collapsed,
  } = useGlobalStore();

  const {
    currentUser,
  } = useUserStore();

  useEffect(() => {
    if (collapsed) {
      setOpenKeys([]);
    } else {
      const [match] = matches || [];
      if (match) {
        // 获取当前匹配的路由，默认为最后一个
        const route = matches.at(-1);
        // 从匹配的路由中取出自定义参数
        const handle = route?.handle as any;
        // 从自定义参数中取出上级path，让菜单自动展开
        setOpenKeys(handle?.parentPaths || []);
        // 让当前菜单和所有上级菜单高亮显示
        setSelectKeys([...(handle?.parentPaths || []), handle?.path] || []);
      }
    }
  }, [
    matches,
    collapsed,
  ]);

  const getMenuTitle = (menu: MenuType) => {
    if (menu?.children?.filter(menu => menu.show)?.length) {
      return menu.name;
    }
    return (
      <Link to={menu.path}>{menu.name}</Link>
    );
  }

  const treeMenuData = useCallback((menus: MenuType[]): ItemType[] => {
    return (menus)
      .map((menu: MenuType) => {
        const children = menu?.children?.filter(menu => menu.show) || [];
        return {
          key: menu.path,
          label: getMenuTitle(menu),
          icon: menu.icon && antdIcons[menu.icon] && React.createElement(antdIcons[menu.icon]),
          children: children.length ? treeMenuData(children || []) : null,
        };
      })
  }, []);


  const menuData = useMemo(() => {
    return treeMenuData(currentUser?.menus?.filter(menu => menu.show) || []);
  }, [currentUser]);


  return (
    <Menu
      className='bg-primary color-transition'
      mode="inline"
      selectedKeys={selectKeys}
      style={{ height: '100%', borderRight: 0 }}
      items={menuData}
      inlineCollapsed={collapsed}
      openKeys={openKeys}
      onOpenChange={setOpenKeys}
    />
  )
}

export default SlideMenu;