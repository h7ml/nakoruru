/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateUserDto {
  /**
   * 名字
   * @example "John"
   */
  firstName: string
  /**
   * 姓
   * @example "Doe"
   */
  lastName: string
  /**
   * 电子邮件地址
   * @example "john.doe@example.com"
   */
  email: string
  /**
   * 部门
   * @example "IT"
   */
  department: string
  /**
   * 状态
   * @example "Active"
   */
  status: string
}

export interface UserDto {
  id: number
  firstName: string
  lastName: string
  email: string
  department: string
  status: string
}

export interface PaginatedUserDto {
  data: UserDto[]
  total: number
}

export interface UpdateUserDto {
  /**
   * 名字
   * @example "John"
   */
  firstName: string
  /**
   * 姓
   * @example "Doe"
   */
  lastName: string
  /**
   * 电子邮件地址
   * @example "john.doe@example.com"
   */
  email: string
  /**
   * 部门
   * @example "IT"
   */
  department: string
  /**
   * 状态
   * @example "Active"
   */
  status: string
}

export interface Menu {
  id: number
  title: string
  path: string
  icon?: string
  parentId?: number
  parent?: Menu
  children?: string[]
}

export type Douban = object

export type CreateReactflowDto = object

export type UpdateReactflowDto = object

export type CreateDatabaseDto = object

export type Database = object

export type UpdateDatabaseDto = object

export type Fenglou7 = object
