import qs from 'qs'
import { message } from 'antd'
import { author, homepage, license, name, repository, version } from '../../package.json'
import type { ApiMaps } from '@/server/api.types'

export interface RequestOptions extends Omit<RequestInit, 'body'> {
  params?: Record<string, any>
  query?: Record<string, any>
  body?: FormData | Record<string, any> | string
  hideError?: boolean
  noSpaceId?: boolean
  manual?: boolean
  defaultParams?: any[]
}

interface ResponseData {
  success: boolean
  data?: any
  message?: string
  code?: number
}

function checkStatus(response: Response) {
  switch (response.status) {
    case 418: {
      return Promise.reject(new Error('用户未登录'))
    }
    case 403: {
      return Promise.reject(new Error('暂无权限'))
    }
    case 420: {
      return Promise.reject(new Error('用户已经在其他地方登录'))
    }
    case 500:
      return Promise.reject(new Error('服务器端错误'))
    case 200:
    default: {
      return response.json()
    }
  }
}

function handleSuccess(response: any) {
  if (response) {
    return response.response?.data ?? response.response ?? response.data ?? response
  }

  if (response.code) {
    return Promise.reject(response)
  }

  return Promise.reject(new Error(response.message))
}

export async function request<T extends keyof ApiMaps, U extends ApiMaps[T]>(
  url: T,
  options?: RequestOptions,
): Promise<U['response']> {
  let [method, path] = url.split(' ')
  if (!method) {
    path = method
    method = 'GET'
  }

  const {
    query = {},
    params = {},
    headers = {},
    hideError,
    noSpaceId,
  } = (options || {}) as RequestOptions
  let { body } = (options || {}) as RequestOptions

  Object.keys(params).forEach((key) => {
    path = path.replace(`{${key}}`, params[key])
  })

  if (qs.stringify(query)) {
    path += `${path.includes('?') ? '&' : '?'}${qs.stringify(query)}`
  }

  if (!(body instanceof FormData) && typeof body !== 'string') {
    body = JSON.stringify(body)
  }

  const locationQuery = qs.parse(window.location.search.slice(1))

  const defaultHeaders: { [k: string]: string } = {
    name,
    version,
    'author.name': author.name,
    'author.mail': author.mail,
    'author.github': author.github,
    license,
    homepage,
    repository: repository.url,
  }

  if (!noSpaceId && locationQuery.sid) {
    defaultHeaders['space-id'] = locationQuery.sid as string
  }

  function handleError(error: Error) {
    if (error?.name !== 'AbortError') {
      if (!hideError) {
        message.error(error.message)
      }

      return Promise.reject(error)
    }
    return Promise.resolve('')
  }

  return fetch(path, {
    ...options,
    method,
    body,
    headers: {
      ...defaultHeaders,
      ...(body instanceof FormData ? {} : { 'content-type': 'application/json' }),
      ...headers,
    },
  })
    .then(checkStatus)
    .then(handleSuccess)
    .catch(handleError)
}

export default {}
