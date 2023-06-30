/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-06-30 11:18:43
 * @lastModified  2023-06-30 12:06:25
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-06-30 11:18:43
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-06-30 12:06:25
 * @FilePath: /EasyTwin/Users/dtstack/Desktop/yunhu/nakoruru/src/hooks/react-query/ReactFlow/Edges/api.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { App } from 'antd'
import { queryKeys } from '@/hooks/query-keys'
import { Daum, Root } from './edge.type'

export function UseEdges() {
  const fetchNodes = async (): Promise<Daum[]> => {
    // 发送请求获取用户数据
    const response: Root = await fetch(`api/react-flow/edges`)
    const users: Root = await response.json()
    return users.response.data
  }

  const useEdgesQuery = () => {
    const queryClient = useQueryClient()
    const { message } = App.useApp()

    const { mutate } = useMutation({
      mutationFn: () => {
        const info = fetchNodes()
        return info
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: queryKeys.useEdges() })
      },
      onError: (err: Error) => {
        console.error(err.message)
        message.error('接口错误' || err)
      },
    })
    return mutate
  }

  return {
    useEdgesQuery,
  }
}
