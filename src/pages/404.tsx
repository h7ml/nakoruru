/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-07-11 06:45:02
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-11 06:45:02
 * @FilePath: \src\pages\404.tsx
 * @Description: 
 * 
 * Copyright (c) 2023 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const Result404 = () => (
  <Result
    status="404"
    title="404"
    subTitle="对不起，你访问的页面不存在。"
    extra={(
      <Button type="primary">
        <Link to="/">首页</Link>
      </Button>
    )}
  />
);

export default Result404;