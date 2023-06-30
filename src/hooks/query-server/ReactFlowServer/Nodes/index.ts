/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-06-30 17:01:12
 * @lastModified  2023-06-30 17:01:12
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-06-30 17:01:12
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-06-30 17:39:45
 * @Description:
 *
 * Copyright (c) 2023 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { useQuery } from '@tanstack/react-query'
import { useCallback } from 'react'
import { App } from 'antd'
import { queryKeys } from '@/hooks/query-keys'
import { NodesApi } from '@/hooks'

export function useFlowNodesApi() {
  const { message } = App.useApp()
  const FlowNodes = useQuery({
    queryKey: queryKeys.useNodes(),
    queryFn: () => NodesApi.getList(),
    onError: (error: Error) => {
      console.error(error.message)
    },
  })
  const refreshFlowEdges = useCallback(() => {
    FlowNodes.refetch()
    message.success('刷新节点信息')
  }, [FlowNodes, message])
  return {
    FlowNodes: FlowNodes.data,
    refreshFlowEdges,
  }
}
