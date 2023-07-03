import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useCallback } from 'react'
import { App } from 'antd'
import { queryKeys } from '@/hooks/query-keys'
import { UserApi } from '@/hooks'

export function useUserApi(id?: number, params?: any) {
  const { message } = App.useApp()

  const UserQuery = useQuery({
    queryKey: queryKeys.userList(),
    queryFn: () => UserApi.getUserList(),
    onError: (error: Error) => {
      console.error(error.message)
    },
  })

  function UserEdit() {
    const queryClient = useQueryClient()
    const { message } = App.useApp()

    const { mutate } = useMutation({
      mutationFn: (body: { id: number; params: any }) => {
        const { id, params } = body
        return UserApi.editUser(id, params)
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

  function UserDelete() {
    const queryClient = useQueryClient()
    const { message } = App.useApp()

    const { mutate } = useMutation({
      mutationFn: (id: number) => {
        return UserApi.deleteUser(id)
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: queryKeys.user(id),
        })
        message.success('用户删除成功')
        UserQuery.refetch()
      },
      onError: (err: Error) => {
        console.error(err.message)
        message.error('用户删除失败')
      },
    })
    return mutate
  }
  const refreshUserQuery = useCallback(() => {
    UserQuery.refetch()
    message.success('刷新用户列表')
  }, [UserQuery, message])

  return {
    UserEdit,
    UserDelete,
    userList: UserQuery.data || [],
    refreshUserQuery,
  }
}
