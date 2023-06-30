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
 * @LastEditTime: 2023-06-30 13:47:46
 * @FilePath: nakoruru/src/hooks/react-query/ReactFlow/Edges/api.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { App } from 'antd'
import { queryKeys } from '@/hooks/query-keys'
import { EdgeDaum, EdgeRoot, EdgeResponse } from './edge.type'

export function UseEdges() {
  const fetchNodes = async (): Promise<EdgeDaum[]> => {
    // 发送请求获取用户数据
    const response: EdgeResponse = await fetch(`api/react-flow/edges`)
    const edges: EdgeRoot = await response.json()
    return edges.response.data
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
