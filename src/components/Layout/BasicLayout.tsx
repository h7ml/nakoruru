/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-07-10 22:56:39
 * @lastModified  2023-07-11 06:45:12
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-07-10 22:56:39
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-11 07:41:41
 * @FilePath: \src\components\Layout\BasicLayout.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"
import { useGlobalStore } from '@/store';
import { lazy, useEffect, useState } from 'react';
import GloablLoading from '@/components/global-loading';

import Slide from './slide';
import Header from './header';
import Content from './content';
import { useUserStore } from '@/store';
// import { Menu } from '@/pages/user/service';
// import { components } from '@/config/routes';
import { routes } from '@/router/plop'
import { replaceRoutes } from '@/router';
import Result404 from '@/pages/404';

const BasicLayout: React.FC = () => {

  const [loading, setLoading] = useState(true);

  const { refreshToken, lang } = useGlobalStore();
  const { setCurrentUser, currentUser } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation();

  const currentUserDetail = {
    "id": "1",
    "createDate": "2023-06-22T12:57:56.615Z",
    "updateDate": "2023-07-09T05:02:24.683Z",
    "userName": "admin",
    "nickName": "管理员",
    "phoneNumber": "1822222222",
    "email": "1111@qq.com",
    "sex": null,
    "avatarEntity": null,
    "roles": [],
    "menus": [
      {
        "id": "6758078640816128",
        "createDate": "2023-07-10T15:34:11.510Z",
        "updateDate": "2023-07-10T16:08:30.741Z",
        "parentId": "5833499856601088",
        "name": "删除",
        "icon": null,
        "type": 3,
        "route": null,
        "filePath": "",
        "orderNumber": null,
        "url": null,
        "show": false,
        "authCode": "menu-test:delete"
      },
      {
        "id": "6758006012248064",
        "createDate": "2023-07-10T15:33:54.195Z",
        "updateDate": "2023-07-10T16:08:29.115Z",
        "parentId": "5833499856601088",
        "name": "编辑",
        "icon": null,
        "type": 3,
        "route": null,
        "filePath": "",
        "orderNumber": null,
        "url": null,
        "show": false,
        "authCode": "menu-test:edit"
      },
      {
        "id": "6757857844264960",
        "createDate": "2023-07-10T15:33:18.870Z",
        "updateDate": "2023-07-10T16:08:27.551Z",
        "parentId": "5833499856601088",
        "name": "查询",
        "icon": null,
        "type": 3,
        "route": null,
        "filePath": "",
        "orderNumber": null,
        "url": null,
        "show": false,
        "authCode": "menu-test:query"
      },
      {
        "id": "6632374573989888",
        "createDate": "2023-07-10T07:14:41.328Z",
        "updateDate": "2023-07-10T16:08:25.977Z",
        "parentId": "5833499856601088",
        "name": "新建",
        "icon": null,
        "type": 3,
        "route": null,
        "filePath": "",
        "orderNumber": null,
        "url": null,
        "show": false,
        "authCode": "menu-test:create"
      },
      {
        "id": "2380054151561216",
        "createDate": "2023-06-28T13:37:29.132Z",
        "updateDate": "2023-07-08T06:44:38.665Z",
        "parentId": "1620378745044992",
        "name": "菜单管理",
        "icon": "MenuOutlined",
        "type": 2,
        "route": "/menu",
        "filePath": "/menu/index.tsx",
        "orderNumber": 0,
        "url": "/menu",
        "show": true,
        "authCode": ""
      },
      {
        "id": "5854701983629312",
        "createDate": "2023-07-08T03:44:29.733Z",
        "updateDate": "2023-07-08T06:45:18.489Z",
        "parentId": "5833499856601088",
        "name": "详情有参数",
        "icon": null,
        "type": 2,
        "route": "/detail/:id",
        "filePath": "/test/detila-params/index.tsx",
        "orderNumber": 10,
        "url": null,
        "show": false,
        "authCode": ""
      },
      {
        "id": "5847213443907584",
        "createDate": "2023-07-08T03:14:44.323Z",
        "updateDate": "2023-07-08T06:44:38.687Z",
        "parentId": "5833499856601088",
        "name": "详情",
        "icon": "FastForwardOutlined",
        "type": 2,
        "route": "/detail",
        "filePath": "/test/detail/index.tsx",
        "orderNumber": 10,
        "url": null,
        "show": false,
        "authCode": ""
      },
      {
        "id": "5833499856601088",
        "createDate": "2023-07-08T02:20:14.753Z",
        "updateDate": "2023-07-08T06:44:38.684Z",
        "parentId": "5833177725665280",
        "name": "菜单测试",
        "icon": "SlackOutlined",
        "type": 2,
        "route": "/menu-test-index",
        "filePath": "/test/index.tsx",
        "orderNumber": 10,
        "url": null,
        "show": true,
        "authCode": ""
      },
      {
        "id": "5833177725665280",
        "createDate": "2023-07-08T02:18:57.951Z",
        "updateDate": "2023-07-08T06:44:38.680Z",
        "parentId": "5833057613381632",
        "name": "二级菜单",
        "icon": "FundOutlined",
        "type": 1,
        "route": "/menu-test2",
        "filePath": null,
        "orderNumber": 10,
        "url": null,
        "show": true,
        "authCode": ""
      },
      {
        "id": "2709189189173248",
        "createDate": "2023-06-29T11:25:21.041Z",
        "updateDate": "2023-07-08T06:44:38.668Z",
        "parentId": null,
        "name": "仪表盘",
        "icon": "DashboardOutlined",
        "type": 2,
        "route": "/dashboard",
        "filePath": "/dashboard/index.tsx",
        "orderNumber": 10,
        "url": "/dashboard",
        "show": true,
        "authCode": ""
      },
      {
        "id": "2379818528145408",
        "createDate": "2023-06-28T13:36:32.959Z",
        "updateDate": "2023-07-08T06:44:38.660Z",
        "parentId": "1620378745044992",
        "name": "角色管理",
        "icon": "TeamOutlined",
        "type": 2,
        "route": "/role",
        "filePath": "/role/index.tsx",
        "orderNumber": 10,
        "url": "/role",
        "show": true,
        "authCode": ""
      },
      {
        "id": "1620785110188032",
        "createDate": "2023-06-26T11:20:25.287Z",
        "updateDate": "2023-07-08T06:44:38.652Z",
        "parentId": "1620378745044992",
        "name": "用户管理",
        "icon": "UserOutlined",
        "type": 2,
        "route": "/user",
        "filePath": "/user/index.tsx",
        "orderNumber": 20,
        "url": "/user",
        "show": true,
        "authCode": ""
      },
      {
        "id": "1620378745044992",
        "createDate": "2023-06-26T11:18:48.406Z",
        "updateDate": "2023-07-08T06:44:38.639Z",
        "parentId": null,
        "name": "系统管理",
        "icon": "SettingOutlined",
        "type": 1,
        "route": "/system",
        "filePath": null,
        "orderNumber": 20,
        "url": null,
        "show": true,
        "authCode": ""
      },
      {
        "id": "5833057613381632",
        "createDate": "2023-07-08T02:18:29.313Z",
        "updateDate": "2023-07-08T06:44:38.677Z",
        "parentId": null,
        "name": "一级菜单",
        "icon": "SketchOutlined",
        "type": 1,
        "route": "/menu-test",
        "filePath": null,
        "orderNumber": 100,
        "url": null,
        "show": true,
        "authCode": ""
      }
    ]
  }
  function getCurrentUserDetail() {
    return currentUserDetail
  }

  const formatMenus = (
    menus: Menu[],
    menuGroup: Record<string, Menu[]>,
    routes: Menu[],
    parentMenu?: Menu
  ): Menu[] => {
    return menus.map(menu => {
      const children = menuGroup[menu.id];

      const parentPaths = parentMenu?.parentPaths || [];
      const path = (parentMenu ? `${parentPaths.at(-1)}${menu.route}` : menu.route) || '';

      routes.push({ ...menu, path, parentPaths });

      return {
        ...menu,
        path,
        parentPaths,
        children: children?.length ? formatMenus(children, menuGroup, routes, {
          ...menu,
          parentPaths: [...parentPaths, path || ''].filter(o => o),
        }) : undefined,
      };
    });
  }


  useEffect(() => {
    if (!refreshToken) {
      navigate('/login');
      return;
    }
    getCurrentUserDetail();
  }, [refreshToken, getCurrentUserDetail, navigate]);

  useEffect(() => {
    if (!currentUserDetail) return;

    const { menus = [] } = currentUserDetail;

    const menuGroup = menus.reduce<Record<string, Menu[]>>((prev, menu) => {
      if (!menu.parentId) {
        return prev;
      }

      if (!prev[menu.parentId]) {
        prev[menu.parentId] = [];
      }

      prev[menu.parentId].push(menu);
      return prev;
    }, {});

    const routes: Menu[] = [];

    currentUserDetail.menus = formatMenus(menus.filter(o => !o.parentId), menuGroup, routes);

    replaceRoutes('*', [...routes.map(menu => ({
      path: `/*${menu.path}`,
      Component: menu.filePath ? lazy(components[menu.filePath]) : null,
      id: `/*${menu.path}`,
      handle: {
        parentPaths: menu.parentPaths,
        path: menu.path,
      },
    })), {
      id: '*',
      path: '*',
      Component: Result404,
    }, {
      id: '/*/',
      path: '/*/',
      element: (
        <Navigate to="/dashboard" />
      ),
    }]);

    setCurrentUser(currentUserDetail);
    setLoading(false);

    // replace一下当前路由，为了触发路由匹配
    routes.navigate(`${location.pathname}${location.search}`, { replace: true });
  }, [currentUserDetail, setCurrentUser]);

  useEffect(() => {
    function storageChange(e: StorageEvent) {
      if (e.key === useGlobalStore.persist.getOptions().name) {
        useGlobalStore.persist.rehydrate();
      }
    }

    window.addEventListener<'storage'>('storage', storageChange);

    return () => {
      window.removeEventListener<'storage'>('storage', storageChange);
    }
  }, []);

  if (loading || !currentUser) {
    return (
      <GloablLoading />
    )
  }

  return (
    <div key={lang} className='bg-primary overflow-hidden'>
      <Header />
      <Slide />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
};

export default BasicLayout;