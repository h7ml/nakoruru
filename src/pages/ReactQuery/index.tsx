/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-08 21:59:23
 * @lastModified  2023-05-08 23:33:44
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-08 21:59:23
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-08 23:33:44
 * @FilePath: \reactflow-mind-map\src\pages\ReactQuery\index.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */

import { UseTypicode } from "@/hooks"
import { useState } from "react";

function ReactQuery() {
  const { useUsersQuery } = UseTypicode();
  const [dataInfo, SetDataInfo] = useState<[]>([]); // 用户数据信息, 可以从数据库获取。 这可以在页面

  const createProjectReq = useUsersQuery();
  const handleCreateProjectClick = () => {
    createProjectReq('albums',
      {
        onSuccess: (info) => {
          SetDataInfo(info)
        },
      },
    );
  };
  return (
    <div>
      <button onClick={handleCreateProjectClick}>handleCreateProjectClick</button>
      {dataInfo?.map((user) => (
        <div key={user.userId}>
          <p>{user.title}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default ReactQuery