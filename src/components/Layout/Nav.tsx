/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-07 23:32:46
 * @lastModified  2023-05-08 22:33:38
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-07 23:32:46
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-08 22:33:38
 * @FilePath: \reactflow-mind-map\src\components\Layout\Nav.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */

import { Link } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { navState, selectedTabState } from '@/store';
import classnames from 'classnames';

export function Nav() {
  const navStateValue = useRecoilValue(navState);
  const [selectedTab, SetSelectedTab] = useRecoilState(selectedTabState);

  const handleTabClick = (tab: string) => {
    SetSelectedTab(tab);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link className={classnames(
            selectedTab == '/' ? 'text-red-500' : 'text-blue-500',
          )} to="/">OverviewFlow</Link>
        </li>
        {navStateValue?.map((item) => (
          <li key={item.path}>
            <Link className={classnames(
              selectedTab == item.path ? 'text-red-500' : 'text-blue-500',
            )} to={item.path} onClick={() => handleTabClick(item.path)}>
              {item.path}
            </Link>
          </li>
        ))}
      </ul>
    </nav >
  )
}