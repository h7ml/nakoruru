/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-08 21:41:06
 * @lastModified  2023-05-08 23:11:12
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-08 21:41:06
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-08 23:07:15
 * @FilePath: \reactflow-mind-map\src\hooks\react-query\typicode.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */


import { useQuery } from "@tanstack/react-query";
import { queryKeys } from '../query-keys';
export const UseTypicode = () => {
  type User = {
    id: number;
    name: string;
    email: string;
  };

  const fetchUsers = async (): Promise<User[]> => {
    // 发送请求获取用户数据
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    const users = await response.json();
    return users;
  };

  const useUsersQuery = () => {
    const ApiResponse = useQuery(<any>{
      queryKey: queryKeys.userInfo(), // optional, defaults to a string based unique key for the query, e.g. "users" + user.id.to
      queryFn: fetchUsers, // optional, the function to run to query data, defaults to using the default fetch function. Note: it can take a
    })
    console.log('%c [ ApiResponse ]-37', 'font-size:13px; background:pink; color:#bf2c9f;', ApiResponse)
    return ApiResponse;
  };


  return {
    useUsersQuery,
  };
};