import type { TableColumnType } from 'antd'
import { Button, Form, Input, Modal, Space, Table } from 'antd'
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
  const [visible, setVisible] = useState(false) // 控制 Modal 的显示和隐藏
  const [user, setUser] = useState<UserList>({})
  const { UserEdit, userList, refreshUserQuery, UserDelete } = useUserApi()

  const removeUser = UserDelete()
  const userEdit = UserEdit()
  const handleDeleteUser = (id: number) => {
    // 处理删除用户的逻辑
    console.log('删除用户', id)
    removeUser(id)
    // 删除用户后，刷新用户列表
    // refreshUserQuery()

    // 删除用户后，刷新用户列表
    // queryClient.invalidateQueries('userList')
  }
  const [form] = Form.useForm()
  const closeModal = () => {
    setVisible(false)
  }
  useEffect(() => {
    form.setFieldsValue(user)
  }, [form, user])
  const handleEditUser = (user: UserList) => {
    setVisible(true)
    // 处理编辑用户的逻辑
    setUser(user)
    console.log('编辑用户', user)
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

  const onFinish = (values: UserList) => {
    // 处理表单提交逻辑
    console.log('表单提交的数据:', values)
    userEdit({ id: user.id, params: { ...values } })
    setVisible(false) // 提交完成后关闭 Modal
  }
  const [users, setUsers] = useState<UserList[]>([])
  useEffect(() => {
    if (userList) {
      setUsers(userList)
    }
    console.log('%c [ userList ]-5', 'font-size:13px; background:pink; color:#bf2c9f;', userList)
  }, [userList])

  return (
    <div>
      {userList && (
        <>
          <Space style={{ marginBottom: 16 }}>
            <Button onClick={refreshUserQuery}> 刷新用户列表 </Button>

            <Modal
              width="800px"
              destroyOnClose
              visible={visible}
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
