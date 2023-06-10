/**
 * @author        yunhu <yunhu@dtstack.com>
 * @date          2023-06-10 09:23:01
 * @lastModified  2023-06-10 10:41:30
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-06-10 09:23:01
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-06-10 10:41:30
 * @FilePath: \nakoruru\src\utils\menu.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
export interface MenuItem {
  key: string;
  icon?: React.ReactNode | null; // icon 属性为可选的
  label: string;
  hidden?: boolean;
  name: string;
  children?: MenuItem[];
  component?: string;
}

export interface NavItem {
  path: string;
  hidden?: boolean;
  children?: NavItem[];
}
export const processChildren = (children?: NavItem[]): MenuItem[] => {
  if (!children) {
    return [];
  }

  return children.map((child) => {
    const processedChild: MenuItem = {
      key: child.path || "",
      icon: null,
      name: child.path || "",
      hidden: child.hidden || false,
      label:
        child.path === "/"
          ? "首页"
          : child.path.substr(child.path.lastIndexOf("/") + 1),
      component:
        child.path === "/"
          ? "/"
          : child.path.substr(child.path.lastIndexOf("/") + 1),
    };

    if (child.children && child.children.length > 0) {
      processedChild.children = processChildren(child.children); // 递归处理子项的 children
    }

    return processedChild;
  });
};
