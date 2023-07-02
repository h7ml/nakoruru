import type { TableColumnType } from 'antd'
import { Button, Space, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useUserApi } from '@/hooks/query-server'

export function User() {
  interface UserList {
    id: number
    first_name: string
    last_name: string
    email: string
    department: string
    status: string
  }
  const columns: TableColumnType<UserList>[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'first_name',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'last_name',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'status',
      dataIndex: 'status',
      key: 'status',
    },
  ]

  const { userList, refreshUserQuery } = useUserApi()
  const [users, setUsers] = useState<UserList[]>([])
  useEffect(() => {
    if (userList) {
      setUsers(userList)
    }
  }, [userList])

  console.log('%c [ userList ]-5', 'font-size:13px; background:pink; color:#bf2c9f;', userList)
  return (
    <div>
      {userList && (
        <>
          <Space style={{ marginBottom: 16 }}>
            <Button onClick={refreshUserQuery}> 刷新用户列表 </Button>
          </Space>
          <Table
            dataSource={users}
            columns={columns}
            rowKey="id"
            pagination={{ pageSize: 50 }}
            scroll={{ y: 1000 }}
          />
        </>
      )}
    </div>
  )
}

export default User
