/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-29 22:29:00
 * @lastModified  2023-05-29 22:29:00
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-29 22:29:00
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-05-29 22:29:19
 * @FilePath: \nakoruru\src\utils\request.ts
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from 'axios'
import { useUserInfoStore } from '@/stores'

class Request {
  private instance: AxiosInstance
  // 存放取消请求控制器Map
  private abortControllerMap: Map<string, AbortController>

  constructor(config: CreateAxiosDefaults) {
    this.instance = axios.create(config)

    this.abortControllerMap = new Map()

    // 请求拦截器
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        if (config.url !== '/login') {
          const token = useUserInfoStore.getState().userInfo?.token
          if (token) config.headers!['x-token'] = token
        }

        const controller = new AbortController()
        const url = config.url || ''
        config.signal = controller.signal
        this.abortControllerMap.set(url, controller)

        return config
      },
      Promise.reject,
    )

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        const url = response.config.url || ''
        this.abortControllerMap.delete(url)

        if (response.data.code !== 1000) {
          return Promise.reject(response.data)
        }

        return response.data
      },
      (err) => {
        if (err.response?.status === 401) {
          useUserInfoStore.setState({ userInfo: null })
          window.location.href = `/login?redirect=${window.location.pathname}`
        }

        return Promise.reject(err)
      },
    )
  }

  // 取消全部请求
  cancelAllRequest() {
    for (const [, controller] of this.abortControllerMap) {
      controller.abort()
    }
    this.abortControllerMap.clear()
  }

  // 取消指定的请求
  cancelRequest(url: string | string[]) {
    const urlList = Array.isArray(url) ? url : [url]
    for (const _url of urlList) {
      this.abortControllerMap.get(_url)?.abort()
      this.abortControllerMap.delete(_url)
    }
  }

  request<T>(config: AxiosRequestConfig): Promise<T> {
    return this.instance.request(config)
  }

  get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get(url, config)
  }

  post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.post(url, data, config)
  }
}

export const httpClient = new Request({
  timeout: 20 * 1000,
  baseURL: import.meta.env.VITE_API_URL,
})
