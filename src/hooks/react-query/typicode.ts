/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-08 21:41:06
 * @lastModified  2023-05-08 23:43:32
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-08 21:41:06
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-08 23:43:32
 * @FilePath: \nakoruru\src\hooks\react-query\typicode.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */


import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKeys } from '../query-keys';
import { App } from "antd";
export const UseTypicode = () => {
  type User = {
    id: number;
    name: string;
    email: string;
  };

  const fetchUsers = async (query: string): Promise<User[]> => {
    // 发送请求获取用户数据
    const response = await fetch(`https://jsonplaceholder.typicode.com/${query}`);
    const users = await response.json();
    return users;
  };

  const useUsersQuery = () => {
    const queryClient = useQueryClient();
    const { message } = App.useApp();

    const { mutate } = useMutation({
      mutationFn: (query: string) => {
        return fetchUsers(query);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: queryKeys.userInfo() });
      },
      onError: (err: Error) => {
        console.error(err.message);
        message.error('新建失败');
      },
    });
    return mutate;
  }


  return {
    useUsersQuery,
  };
}