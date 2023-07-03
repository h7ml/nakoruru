import type { TableColumnType } from 'antd'
import { Button, Form, Input, Modal, Space, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useListApi } from '@/hooks/query-server'

export function User() {
  interface UserList {
    id: number
    first_name: string
    last_name: string
    email: string
    department: string
    status: string
  }

  const [visible, setVisible] = useState(false)
  const [user, setUser] = useState<UserList>({})
  const { useEdit, userGetlist, refreshUserQuery, useDelete, useCreate } = useListApi()

  const userHandleEdit = useEdit()
  const userHandleCreate = useCreate()
  const userHandleDelete = useDelete()
  const form = Form.useForm()[0]

  useEffect(() => {
    form.setFieldsValue(user)
  }, [form, user])

  const handleDeleteUser = (id: number) => {
    console.log('删除用户', id)
    userHandleDelete(id)
  }

  const handleEditUser = (user: UserList) => {
    setUser(user)
    setVisible(true)
  }

  const onFinish = (values: UserList) => {
    console.log('表单提交的数据:', values)
    user.id
      ? userHandleEdit({ id: user.id, params: { ...values } })
      : userHandleCreate({ params: values })
    setVisible(false)
  }

  const [users, setUsers] = useState<UserList[]>([])

  useEffect(() => {
    if (userGetlist) {
      setUsers(userGetlist)
    }
    console.log('%c [ userList ]-5', 'font-size:13px; background:pink; color:#bf2c9f;', userGetlist)
  }, [userGetlist])

  const closeModal = () => {
    setVisible(false)
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
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 200,
      render: (record: UserList) => (
        <>
          {' '}
          <Button type="primary" onClick={() => handleEditUser(record)}>
            编辑
          </Button>
          <Button
            type="primary"
            danger
            className="ml-2"
            onClick={() => handleDeleteUser(record.id)}
          >
            删除
          </Button>
        </>
      ),
    },
  ]

  return (
    <Space style={{ marginBottom: 16 }}>
      <Button onClick={refreshUserQuery}>刷新用户列表</Button>
      <Button type="primary" onClick={() => setVisible(true)}>
        新增用户
      </Button>
      <Modal
        width="800px"
        destroyOnClose
        open={visible}
        onCancel={closeModal}
        closeIcon={<></>}
        onOk={() => form.submit()}
      >
        <Form
          form={form}
          layout="horizontal"
          labelCol={{
            span: 5,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="first_name"
            name="first_name"
            rules={[
              {
                required: true,
                message: '请输入姓名',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="last_name"
            name="last_name"
            rules={[
              {
                required: true,
                message: 'last_name',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="email"
            name="email"
            rules={[
              {
                required: true,
                message: 'email',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="department"
            name="department"
            rules={[
              {
                required: true,
                message: 'department',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      {userGetlist && (
        <Table
          dataSource={users}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 50 }}
          scroll={{ y: 1000 }}
        />
      )}
    </Space>
  )
}

export default User
