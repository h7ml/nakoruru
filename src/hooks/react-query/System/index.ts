/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-07-13 01:04:15
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-07-13 01:26:37
 * @FilePath: \src\hooks\react-query\System\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */

export async function getCaptcha() {
  const response = await fetch('api/system/captcha')
  const stream = response.body
  let jsonData

  if (stream) {
    const reader = stream.getReader()
    const chunks = []

    while (true) {
      const { done, value } = await reader.read()

      if (done) {
        break
      }

      chunks.push(value)
    }

    const combinedChunks = new Uint8Array(
      chunks.reduce((totalLength, chunk) => totalLength + chunk.length, 0),
    )

    let offset = 0
    for (const chunk of chunks) {
      combinedChunks.set(chunk, offset)
      offset += chunk.length
    }

    const textDecoder = new TextDecoder()
    const stringData = textDecoder.decode(combinedChunks)

    try {
      jsonData = JSON.parse(stringData)
    } catch {
      // 如果无法解析为 JSON，则把返回的文本数据作为原始数据
      jsonData = stringData
    }
  } else {
    jsonData = await response.json()
  }

  return jsonData
}
