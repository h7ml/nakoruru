/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-16 09:53:38
 * @lastModified  2023-05-16 09:54:46
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-16 09:53:38
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-16 09:54:46
 * @FilePath: \nakoruru\api\nakoruru\index.js
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */
// 该服务为 vercel serve跨域处理
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''
  if (req.url.startsWith('/api')) {
    target = 'https://nestjs.h7ml.cn/api/'
  }
  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/api/': '/'
    }
  })(req, res)
}
