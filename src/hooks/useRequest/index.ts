import { useEffect, useState } from 'react'
import type { RequestOptions } from '@/utils/request'
import { request } from '@/utils/request'
import type { ApiMaps } from '@/server/api.types'

export function useRequest<T extends keyof ApiMaps, U extends ApiMaps[T]>(
  url: T,
  options?: RequestOptions,
) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<U['response'] | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setLoading(true)
    request(url, options)
      .then((res) => {
        console.log('%c [ res ]-18', 'font-size:13px; background:pink; color:#bf2c9f;', res)
        setLoading(false)
        setData(res)
      })
      .catch((error) => {
        setLoading(false)
        setError(error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, JSON.stringify(options)])

  return {
    data,
    error,
    loading,
  }
}
