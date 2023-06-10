/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-11 14:17:33
 * @lastModified  2023-06-10 10:37:48
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-11 14:17:33
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-06-10 10:55:01
 * @FilePath: \nakoruru\src\components\Layout\ProMain.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import {
  DoubleRightOutlined,
  GithubFilled,
  InfoCircleFilled,
  LogoutOutlined,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
  SmileFilled,
  AppstoreOutlined
} from "@ant-design/icons";
import { DefaultFooter, ProSettings } from "@ant-design/pro-components";
import {
  PageContainer,
  ProCard,
  ProConfigProvider,
  ProLayout,
  SettingDrawer,
} from "@ant-design/pro-components";
import { css } from "@emotion/css";
import { Input, Dropdown, theme } from "antd";
import React, { useState } from "react";
import { repository } from "../../../package.json";
import Router from "@/router";
import { VisibleState, navState, useLoginStore } from "@/store";
import { useRecoilValue } from "recoil";
import { useNavigate, useLocation } from "react-router-dom";
import { processChildren } from "@/utils/menu";

const Item: React.FC<{ children: React.ReactNode }> = (props) => {
  const { token } = theme.useToken();
  return (
    <div
      className={css`
        color: ${token.colorTextSecondary};
        font-size: 14px;
        cursor: pointer;
        line-height: 22px;
        margin-bottom: 8px;
        &:hover {
          color: ${token.colorPrimary};
        }
      `}
      style={{
        width: "33.33%",
      }}
    >
      {props.children}
      <DoubleRightOutlined
        style={{
          marginInlineStart: 4,
        }}
      />
    </div>
  );
};

const SearchInput = () => {
  const { token } = theme.useToken();
  return (
    <div
      key="SearchOutlined"
      aria-hidden
      style={{
        display: "flex",
        alignItems: "center",
        marginInlineEnd: 24,
      }}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Input
        style={{
          borderRadius: 4,
          marginInlineEnd: 12,
          backgroundColor: token.colorBgTextHover,
        }}
        prefix={
          <SearchOutlined
            style={{
              color: token.colorTextLightSolid,
            }}
          />
        }
        placeholder="搜索方案"
        bordered={false}
      />
      <PlusCircleFilled
        style={{
          color: token.colorPrimary,
          fontSize: 24,
        }}
      />
    </div>
  );
};

export const ProMain: React.FC = () => {
  const history = useNavigate();
  const repo = repository as { url: string };
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    // fixSiderbar: true,
    // layout: 'mix',
    // splitMenus: true,
    fixSiderbar: true,
    layout: "top",
    splitMenus: false,
    navTheme: "light",
    contentWidth: "Fluid",
    colorPrimary: "#1677FF",
    fixedHeader: true,
  });

  const navStateValue = useRecoilValue(navState);
  const getNav = (navValue: any) => {
    const response = processChildren(navValue);

    return {
      path: "/",
      routes: response,
      location: {
        pathname: "/",
      },
    };
  };
  const location = useLocation();
  const path = location.pathname;
  const lastSlashIndex = path.lastIndexOf("/");
  const param = path.substr(lastSlashIndex + 1);
  const [pathname, setPathname] = useState(param);
  const [num, setNum] = useState(40);
  const { userInfo, setUserInfo } = useLoginStore();
  const handleLogout = () => {
    history('login');
    setUserInfo(null)
  }
  const toggleVisibility = VisibleState((state) => state.toggleVisibility)
  return (
    <div
      id="test-pro-layout"
      style={{
        height: "100vh",
      }}
    >
      <ProConfigProvider hashed={false}>
        <ProLayout
          prefixCls="my-prefix"
          bgLayoutImgList={[
            {
              src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
              left: 85,
              bottom: 100,
              height: "303px",
            },
            {
              src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
              bottom: -68,
              right: -45,
              height: "303px",
            },
            {
              src: "https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png",
              bottom: 0,
              left: 0,
              width: "331px",
            },
          ]}
          footerRender={() => (
            <DefaultFooter
              className=""
              copyright={
                <span>
                  ©2023 Created by h7ml{" "}
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 h20"
                    title="nakoruru 娜可露露"
                  >
                    nakoruru
                  </a>
                </span>
              }
            />
          )}
          // route={getNav(navStateValue)}
          location={{
            pathname,
          }}
          siderMenuType="group"
          menu={{
            collapsedShowGroupTitle: true,
          }}
          avatarProps={{
            src: "https://www.h7ml.cn/logo.png",
            size: "small",
            title: userInfo?.username ?? "h7ml",
            render: (props, dom) => {
              return (
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: "logout",
                        icon: <LogoutOutlined />,
                        label: "退出登录",
                        onClick: handleLogout,
                      },
                    ],
                  }}
                >
                  {dom}
                </Dropdown>
              );
            },
          }}
          actionsRender={(props) => {
            if (props.isMobile) return [];
            return [
              props.layout !== "side" && document.body.clientWidth > 1400 ? (
                <SearchInput />
              ) : undefined,
              <InfoCircleFilled key="InfoCircleFilled" />,
              <QuestionCircleFilled key="QuestionCircleFilled" />,
              <GithubFilled key="GithubFilled" />,
              <AppstoreOutlined key="AppstoreOutlined" onClick={() => {
                toggleVisibility();
              }} />,
            ];
          }}
          headerTitleRender={(logo, title, _) => {
            const defaultDom = (
              <a>
                {logo}
                {title}
              </a>
            );
            if (document.body.clientWidth < 1400) {
              return defaultDom;
            }
            if (_.isMobile) return defaultDom;
            return <>{defaultDom}</>;
          }}
          menuFooterRender={(props) => {
            if (props?.collapsed) return undefined;
            return (
              <div
                style={{
                  textAlign: "center",
                  paddingBlockStart: 12,
                }}
              >
                <div>© 2021 Made with love</div>
                <div>by Ant Design</div>
              </div>
            );
          }}
          onMenuHeaderClick={(e) => console.log(e)}
          menuItemRender={(item, dom) => (
            <div
              onClick={() => {
                setPathname(item.path || "/");
                history(item.path);
              }}
            >
              {dom}
            </div>
          )}
          {...settings}
        >
          <PageContainer
            style={{
              padding: 0,
              margin: 0,
            }}
            pageHeaderRender={false}
            token={{
              paddingInlinePageContainerContent: num,
            }}
          >
            <ProCard
              style={{
                minHeight: "90vh",
              }}
            >
              <Router />
            </ProCard>
          </PageContainer>

          <SettingDrawer
            pathname={pathname}
            enableDarkTheme
            getContainer={() => document.getElementById("test-pro-layout")}
            settings={settings}
            onSettingChange={(changeSetting) => {
              setSetting(changeSetting);
            }}
            disableUrlParams={false}
          />
        </ProLayout>
      </ProConfigProvider>
    </div>
  );
};
