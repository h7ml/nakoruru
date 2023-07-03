import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useCallback } from 'react'
import { App } from 'antd'
import { queryKeys } from '@/hooks/query-keys'
import { UserApi } from '@/hooks'
import type { CreateUserDto } from '@/server/types/api.swagger-schema-types'

export function useListApi() {
  const { message } = App.useApp()
  const queryClient = useQueryClient()
  const userGetlist = useQuery({
    queryKey: queryKeys.userList('query'),
    queryFn: () => UserApi.userList(),
    onError: (error: Error) => {
      console.error(error.message)
    },
  })

  function useEdit() {
    const { mutate } = useMutation({
      mutationFn: (body: { id: number; params: any }) => {
        const { id, params } = body
        return UserApi.userEdit(id, params)
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: queryKeys.user(id, params) })
        message.success('更新信息成功')
      },
      onError: (err: Error) => {
        console.error(err.message)
        message.error('更新信息失败')
      },
    })

    return mutate
  }
  function useDelete() {
    const { mutate } = useMutation({
      mutationFn: (id: number) => {
        return UserApi.userDelete(id)
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: queryKeys.user(id),
        })
        message.success('用户删除成功')
        userGetlist.refetch()
      },
      onError: (err: Error) => {
        console.error(err.message)
        message.error('用户删除失败')
      },
    })
    return mutate
  }

  function useCreate() {
    const { mutate } = useMutation({
      mutationFn: (params: CreateUserDto) => {
        UserApi.userCreate(params)
      },
      onSuccess: () => {
        queryClient.invalidateQueries(queryKeys.userList('query'))
        message.success('新建用户成功')
      },
      onError: (err: Error) => {
        console.error(err.message)
        message.error('新建用户失败')
      },
    })
    return mutate
  }

  const refreshUserQuery = useCallback(() => {
    userGetlist.refetch()
    message.success('刷新用户列表')
  }, [userGetlist, message])

  return {
    useEdit,
    useDelete,
    useCreate,
    userGetlist: userGetlist.data || [],
    refreshUserQuery,
  }
}
