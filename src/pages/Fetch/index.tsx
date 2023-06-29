/**
 * @author        h7ml <h7ml@qq.com>
 * @date          2023-05-08 20:45:23
 * @lastModified  2023-06-10 10:24:42
 * Copyright © www.h7ml.cn All rights reserved
 */
/*
 * @Author: h7ml <h7ml@qq.com>
 * @Date: 2023-05-08 20:45:23
 * @LastEditors: h7ml <h7ml@qq.com>
 * @LastEditTime: 2023-06-10 10:24:42
 * @FilePath: \nakoruru\src\pages\Fetch\index.tsx
 * @Description:
 *
 * Copyright (c) 2022 by h7ml<h7ml@qq.com>, All Rights Reserved.
 */
import { Table, message } from 'antd'
import { useEffect } from 'react'
import { useFetchData } from '@/hooks'

interface ColumnsData {
  id: number
  name: string
  email: string
}
interface TableData {
  statusCode: number
  data: ColumnsData[]
}

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
]

const Fetch: React.FC = () => {
  const { data, loading, error } = useFetchData<TableData[]>('api/system/users')

  useEffect(() => {
    if (loading) {
      message.loading('Loading...')
    } else {
      message.destroy() // Close any existing message
    }
  }, [loading])

  if (error) {
    message.error('Error fetching data, please try again!')
  }

  return <div>{data && <Table dataSource={data.data} columns={columns} rowKey="id" />}</div>
}

export default Fetch
