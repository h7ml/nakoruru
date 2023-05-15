/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-09 14:32:23
 * @lastModified  2023-05-09 14:36:25
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-09 14:32:23
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-09 14:36:25
 * @FilePath: \nakoruru\src\pages\NotFound\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import React from "react";
import { useNavigate } from "react-router-dom";
import { Result, Button } from "antd";

export const NotFound: React.FC = () => {
  const history = useNavigate();

  const handleClick = () => {
    history("/");
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={handleClick}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotFound;
