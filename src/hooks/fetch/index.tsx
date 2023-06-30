/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-08 20:41:35
 * @lastModified  2023-06-30 11:12:54
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-08 20:41:35
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-06-30 11:12:54
 * @FilePath: nakoruru/src/hooks/fetch/index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { useEffect, useState } from 'react'

interface FetchDataReturnType<T> {
  data: T | null // 将data状态类型更改为T | null
  loading: boolean
  error: string | null | undefined // 将error类型更改为T | null | undefined
}

export function useFetchData<T>(url: string): FetchDataReturnType<T> {
  // 定义泛型参数T
  const [data, setData] = useState<T | null>(null) // 将data状态类型更改为T | null
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null | undefined>(null) // 将error类型更改为T | null | undefined

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url)
        const jsonData = await response.json()
        setData(jsonData?.response?.data || jsonData)
        setError(null)
      } catch (error: any) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useFetchData
