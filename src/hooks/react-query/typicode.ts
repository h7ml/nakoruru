/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-08 21:41:06
 * @lastModified  2023-05-08 21:58:21
 * Copyright © www.h7ml.cn All rights reserved
 */

import { useMutation, useQuery } from "@tanstack/react-query";

/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-08 21:41:06
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-08 21:58:16
 * @FilePath: \reactflow-mind-map\src\hooks\react-query\typicode.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved. 
 */
export const UseTypicode = () => {
  type User = {
    id: number;
    name: string;
    email: string;
  };

  const fetchUsers = async (): Promise<User[]> => {
    // const { data } = await axios.get('/api/users');
    return [];
  };

  const createUser = async (user: User): Promise<User> => {
    // const { data } = await axios.post('/api/users', user);
    return [];
  };

  const useUsersQuery = () => {
    return useQuery<User[]>('users', fetchUsers);
  };

  const useCreateUserMutation = () => {
    return useMutation(createUser, {
      onSuccess: (data) => {
        console.log('User created', data);
      },
      onError: (error) => {
        console.error('Failed to create user', error);
      },
    });
  };
  return {
    useUsersQuery,
    useCreateUserMutation
  }
}
