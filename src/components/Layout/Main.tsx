/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-09 13:12:18
 * @lastModified  2023-06-28 17:27:17
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-09 13:12:18
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-06-28 17:27:17
 * @FilePath: /nakoruru/src/components/Layout/Main.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { useEffect, useState } from "react";
import {
  Outlet,
  useNavigate,
  useLocation,
  RouteObject,
} from "react-router-dom";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { navState } from "@/store";
import { useRecoilValue } from "recoil";
import { MenuItem, NavItem, processChildren } from "@/utils/menu";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useLoginStore } from "@/store";
const { Header, Sider, Content } = Layout;
const Main = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [items, setItems] = useState<MenuProps["items"]>([]);
  const navstatevalue = useRecoilValue<RouteObject[]>(navState) as NavItem[];

  const { userInfo } = useLoginStore();
  useEffect(() => {
    if (!userInfo || !userInfo.username || !userInfo.password) {
      navigate("/login");
    }
  }, [userInfo]);
  useEffect(() => {
    const item: MenuItem[] = processChildren(navstatevalue);
    setItems(item);
  }, [navstatevalue]);
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuClick: MenuProps["onClick"] = ({ key }) => {
    navigate(key);
  };
  const renderMenuItem = (item: MenuItem) => {
    if (item.hidden) {
      return null; // 如果 hidden 为 true，返回 null，表示不渲染该项
    }

    if (item.children) {
      // 如果有子项，则递归处理子项
      const subMenuItems = item.children.map((childItem) =>
        renderMenuItem(childItem),
      );
      return (
        <Menu.SubMenu
          key={item.key}
          label={item.label}
          title={item.label}
          icon={item.icon}
        >
          {subMenuItems}
        </Menu.SubMenu>
      );
    }

    return (
      <Menu.Item key={item.key} label={item.label} icon={item.icon}>
        {item.label}
      </Menu.Item>
    );
  };

  const menuItems = items.map((item) => renderMenuItem(item));

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <Menu
          mode="inline"
          defaultSelectedKeys={[pathname]}
          onClick={handleMenuClick}
          defaultOpenKeys={["/"]}
        >
          {menuItems}
        </Menu>
      </Sider>
      <Layout style={{ display: "flex", flexDirection: "column" }} className="relative">
        <Header style={{ background: "#fff", padding: 0 }} className="absolute">
          {!collapsed && (
            <ArrowLeftOutlined onClick={() => setCollapsed(true)} />
          )}
          {collapsed && (
            <ArrowRightOutlined onClick={() => setCollapsed(false)} />
          )}
        </Header>
        <Content style={{ padding: "16px", flex: 1, overflowY: "auto" }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Main;
