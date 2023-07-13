/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-07-13 00:57:34
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-13 22:29:34
 * @FilePath: \src\hooks\query-server\System\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { useQuery } from '@tanstack/react-query'
import { useCallback } from 'react'
import { queryKeys } from '@/hooks/query-keys'
import { getCaptcha } from '@/hooks/react-query'

export function useSystem() {
  const captcha = useQuery({
    queryKey: queryKeys.captcha(),
    queryFn: () => getCaptcha(),
    onError: (error: Error) => {
      console.error(error.message)
    },
  })
  const refreshCaptcha = useCallback(() => {
    captcha.refetch()
  }, [captcha])
  return {
    captcha: captcha?.data?.data,
    captchaCode: captcha?.data?.captcha,
    refreshCaptcha,
  }
}
