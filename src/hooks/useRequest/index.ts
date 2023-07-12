import { useCallback, useEffect, useRef, useState } from 'react'
import type { AxiosResponse } from 'axios'
import type { RequestOptions } from '@/utils/request'
import { request } from '@/utils/request'
import type { ApiMaps } from '@/server/api.types'

export type Response<T> = Promise<[boolean, T, AxiosResponse<T>]>

interface RequestResponse<T> {
  loading: boolean
  data: T | undefined
  error: Error | null
  run(...params: any): void
  runAsync(...params: any): Response<T>
  refresh(): void
}

export function useRequest<T extends keyof ApiMaps, U extends ApiMaps[T]>(
  urlOrServiceMethod: T | ((...args: any) => Response<U['response']>),
  options?: RequestOptions,
): RequestResponse<U['response']> {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<U['response']>()
  const [error] = useState<Error | null>(null)
  const paramsRef = useRef<any[]>([])

  const resolveData = useCallback(async () => {
    setLoading(true)
    let response
    if (typeof urlOrServiceMethod === 'string') {
      response = await request(urlOrServiceMethod, options)
    } else {
      response = await urlOrServiceMethod(...paramsRef.current)
    }
    setLoading(false)
    setData(response)
  }, [urlOrServiceMethod, options])

  const runAsync = useCallback(
    async (...params: any) => {
      paramsRef.current = params
      setLoading(true)
      let response
      if (typeof urlOrServiceMethod === 'string') {
        response = await request(urlOrServiceMethod, options)
      } else {
        response = await urlOrServiceMethod(...params)
      }
      setLoading(false)
      setData(response)
      return response
    },
    [urlOrServiceMethod, options],
  )

  const run = useCallback(
    async (...params: any) => {
      await runAsync(...params)
    },
    [runAsync],
  )

  const refresh = useCallback(() => {
    runAsync(...paramsRef.current)
  }, [runAsync])

  useEffect(() => {
    if (!options?.manual) {
      resolveData()
    }
  }, [options, resolveData])

  return {
    loading,
    data,
    error,
    run,
    runAsync,
    refresh,
  }
}
