/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-07-11 06:37:29
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-12 08:20:51
 * @FilePath: \src\pages\User\service.ts
 * @Description:
 *
 * Copyright (c) 2023 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { request } from '@/utils/request'

export interface Menu {
  id: string
  parentId?: string
  name?: string
  icon?: string
  type?: number
  route?: string
  filePath?: string
  orderNumber?: number
  url?: string
  show?: boolean
  children?: Menu[]
  path: string
  Component?: any
  parentPaths?: string[]
}

export interface User {
  id: number
  userName: string
  nickName: string
  phoneNumber: string
  email: string
  createDate: string
  updateDate: string
  avatar?: any
  menus: Menu[]
  routes: any[]
  flatMenus: Menu[]
  avatarPath: string
}

const userService = {
  // 分页获取用户列表
  getUserListByPage: async (
    { current, pageSize }: { current: number; pageSize: number },
    formData: any,
  ) => {
    const [error, data] = await request('GET /api/system/user', {
      params: {
        page: current - 1,
        size: pageSize,
        ...formData,
      },
    })

    if (error) {
      console.log('%c [ error ]-60', 'font-size:13px; background:pink; color:#bf2c9f;', error)
      return error
    }

    return {
      list: data.data,
      total: data.total,
    }
  },
  // 添加用户
  addUser: (data: User) => {
    return request.post('/api/user', data)
  },
  // 更新用户
  updateUser: (data: User) => {
    return request.put('/api/user', data)
  },
  // 删除用户
  deleteUser: (id: number) => {
    return request.delete(`/api/user/${id}`)
  },
  sendEmailCaptcha: (email: string) => {
    return request.post('/api/user/send/email/captcha', { email })
  },
  getRoles: () => {
    return request.get<any[]>('/api/role/list')
  },
}

export default userService
