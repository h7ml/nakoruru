import { request } from '@/utils/request'
import apis from '@/server/constants/api.swagger-constants'
import { CreateUserDto, UpdateUserDto } from '@/server/types/api.swagger-types'
/**
 * 获取用户列表
 * @returns
 */
async function userList() {
  return request('GET /api/system/user')
}

/**
 * 更新用户信息
 * @param id 用户id
 * @param params  用户信息
 * @returns
 */
async function userEdit(id: number, params: UpdateUserDto) {
  return request(apis.apiSystemUserPatch, { params: { id }, body: params })
}

/**
 * 删除用户
 * @param id 用户id
 * @returns
 */
async function userDelete(id: number) {
  return request(apis.apiSystemUserDelete, { params: { id } })
}

/**
 * 新增用户
 * @param params 用户信息
 * @returns
 */
async function userCreate(params: CreateUserDto) {
  return request(apis.apiSystemUserPost, { body: params })
}

export const UserApi = { userList, userEdit, userDelete, userCreate }
