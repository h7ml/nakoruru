/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-09 13:12:18
 * @lastModified  2023-05-09 17:18:33
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-09 13:12:18
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-09 17:18:33
 * @FilePath: \nakoruru\src\components\Layout\Main.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Router from '@/router';
import { useRecoilValue } from 'recoil';
import { navState } from '@/store';
import classNames from 'classnames';
const { Header, Sider, Content } = Layout;

export const Main: React.FC = () => {
  const history = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navStateValue = useRecoilValue(navState);

  const getNav = (navValue: any) => {
    const response = navValue.map((nav: { path: any; }) => {
      return {
        ...nav,
        key: nav.path,
        label: nav.path
      };
    });
    return response;
  }
  const toggleMenu = (e) => {
    history(e.key)
  }
  return (
    <Layout className='h-100vh h-100vh'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/']}
          items={getNav(navStateValue)}
          onClick={(e) => { toggleMenu(e) }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          className={('overflow-auto')}
          style={{
            background: colorBgContainer,
          }}
        >
          <Router />
        </Content>
      </Layout>
    </Layout>
  );
};
