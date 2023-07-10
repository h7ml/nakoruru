import { useEffect, useState } from 'react'
import { Outlet, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { useAppRouter, useLoginStore } from '@/store'
import type { MenuItem } from '@/utils/menu'
import { processChildren } from '@/utils/menu'

const { Header, Sider, Content } = Layout
export function Main() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [items, setItems] = useState<MenuProps['items']>([])
  const { navState } = useAppRouter()

  const { userInfo } = useLoginStore()
  useEffect(() => {
    if (!userInfo || !userInfo.username || !userInfo.password) {
      navigate('/login')
    }
  }, [navigate, userInfo])
  useEffect(() => {
    const item: MenuItem[] = processChildren(navState)
    console.log('%c [ item ]-25', 'font-size:13px; background:pink; color:#bf2c9f;', item)
    setItems(item)
  }, [navState])
  const [collapsed, setCollapsed] = useState(false)

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key)
  }

  const renderMenuItem = (item: MenuItem) => {
    if (item.hidden) {
      return null // 如果 hidden 为 true，返回 null，表示不渲染该项
    }

    if (item.children) {
      // 如果有子项，则递归处理子项
      const subMenuItems = item.children.map((childItem) => renderMenuItem(childItem))
      return (
        <Menu.SubMenu key={item.key} label={item.label} title={item.label} icon={item.icon}>
          {subMenuItems}
        </Menu.SubMenu>
      )
    }

    return (
      <Menu.Item key={item.key} label={item.label} icon={item.icon}>
        {item.label}
      </Menu.Item>
    )
  }

  const menuItems = items.map((item) => renderMenuItem(item))

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <Menu
          mode="inline"
          defaultSelectedKeys={[pathname]}
          onClick={handleMenuClick}
          defaultOpenKeys={[pathname]}
        >
          {menuItems}
        </Menu>
      </Sider>
      <Layout style={{ display: 'flex', flexDirection: 'column' }} className="relative">
        <Header style={{ background: '#fff', padding: 0 }} className="absolute">
          {!collapsed && <ArrowLeftOutlined onClick={() => setCollapsed(true)} />}
          {collapsed && <ArrowRightOutlined onClick={() => setCollapsed(false)} />}
        </Header>
        <Content style={{ padding: '16px', flex: 1, overflowY: 'auto' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Main
