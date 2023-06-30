/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type User = object

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

export type CreateOrderDto = object

export type UpdateOrderDto = object
