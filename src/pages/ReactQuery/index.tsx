/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-08 21:59:23
 * @lastModified  2023-05-08 23:08:28
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-08 21:59:23
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-08 23:08:28
 * @FilePath: \reactflow-mind-map\src\pages\ReactQuery\index.tsx
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */

import { UseTypicode } from "@/hooks"

function ReactQuery() {
  const { useUsersQuery } = UseTypicode();

  const { data, isLoading, isError } = useUsersQuery();
  console.log('%c [ data ]-24', 'font-size:13px; background:pink; color:#bf2c9f;', data)

  if (isLoading) {
    return <div>Loading users...</div>;
  }

  if (isError) {
    return <div>Error loading users.</div>;
  }
  return (
    <div>
      {data?.map((user) => (
        <div key={user.userId}>
          <p>{user.title}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default ReactQuery