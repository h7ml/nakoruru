/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-07-03 05:08:22
 * @lastModified  2023-07-03 05:41:11
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-07-03 05:08:22
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-03 05:41:11
 * @FilePath: \src\hooks\query-server\User\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { useQuery } from '@tanstack/react-query'
import { useCallback } from 'react'
import { App } from 'antd'
import { queryKeys } from '@/hooks/query-keys'
import { UserApi } from '@/hooks'

export function useUserApi() {
  const { message } = App.useApp()
  const UserQuery = useQuery({
    queryKey: queryKeys.uses(),
    queryFn: () => UserApi.getUserList(),
    onError: (error: Error) => {
      console.error(error.message)
    },
  })
  const refreshUserQuery = useCallback(() => {
    UserQuery.refetch()
    message.success('刷新用户列表')
  }, [UserQuery, message])
  return {
    userList: UserQuery.data || [],
    refreshUserQuery,
  }
}
