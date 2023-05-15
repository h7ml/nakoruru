/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-09 13:12:18
 * @lastModified  2023-05-09 19:32:00
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-09 13:12:18
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-09 20:05:27
 * @FilePath: \nakoruru\src\components\Layout\Main.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import Router from "@/router";
import { useRecoilValue } from "recoil";
import { navState } from "@/store";
import classNames from "classnames";
const { Header, Sider, Content, Footer } = Layout;
import { repository } from "../../../package.json";

export const Main: React.FC = () => {
  const history = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navStateValue = useRecoilValue(navState);
  const location = useLocation();
  const path = location.pathname;
  const lastSlashIndex = path.lastIndexOf("/");
  const param = path.substr(lastSlashIndex + 1);
  const repo = repository as { url: string };
  const getNav = (navValue: any) => {
    const response = navValue.map((nav: { path: any }) => {
      return {
        ...nav,
        key: nav.path,
        label: nav.path.substr(nav.path.lastIndexOf("/") + 1),
      };
    });
    return response;
  };
  const toggleMenu = (e) => {
    history(e.key);
  };
  return (
    <Layout className="h-100vh h-100vh">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[param]}
          items={getNav(navStateValue)}
          onClick={(e) => {
            toggleMenu(e);
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          className={"overflow-auto"}
          style={{
            background: colorBgContainer,
          }}
        >
          <Router />
        </Content>
        <Footer className={classNames("container mx-auto")}>
          <div className="text-center">
            <span className="text-w-0-400" title="nakoruru 娜可露露 by h7ml">
              ©2023 Created by h7ml{" "}
            </span>
            <a
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400"
              title="nakoruru 娜可露露"
            >
              nakoruru
            </a>
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
};
