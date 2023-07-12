/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-07-10 23:01:43
 * @lastModified  2023-07-10 23:01:43
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-07-10 23:01:43
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-10 23:01:44
 * @FilePath: \src\components\global-loading\index.tsx
 * @Description:
 *
 * Copyright (c) 2023 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import React from 'react'

import './index.css'

const GloablLoading: React.FC<any> = () => (
  <div className="w-[100vw] h-[100vh] flex justify-center items-center">
    <div className="loading transform  translate-y-[-12vh]"></div>
  </div>
)

export default GloablLoading
