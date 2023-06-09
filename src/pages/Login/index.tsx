import React, { useState } from 'react'
import {
  AlipayOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoOutlined,
  UserOutlined,
  WeiboOutlined,
  YuqueOutlined,
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import {
  LoginFormPage,
  ProForm,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components'
import { App, Button, Divider, Space, Tabs } from 'antd'
import type { CSSProperties } from 'react'
import { useLoginStore } from '@/store'
import { useSystem } from '@/hooks/query-server'
import { RenderSVG } from '@/components'

type LoginType = 'phone' | 'account'

const iconStyles: CSSProperties = {
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '18px',
  verticalAlign: 'middle',
  cursor: 'pointer',
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function Login() {
  const { captcha, captchaCode, refreshCaptcha } = useSystem()
  const { message } = App.useApp()
  const [loginType, setLoginType] = useState<LoginType>('account')
  const { setUserInfo } = useLoginStore()
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    if (values.captcha) {
      if (values.captcha !== captchaCode) {
        message.error('验证码错误')
        return false
      }
    }
    return delay(1000).then(() => {
      message.success('登录成功🎉🎉🎉')
      setUserInfo(values)
      navigate('/tree', { replace: true })
    })
  }

  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '100vh',
      }}
    >
      <LoginFormPage
        backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
        onFinish={onFinish as any}
        title="Nakoruru"
        subTitle="一个轻量级react后台管理系统"
        activityConfig={{
          style: {
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
            color: '#fff',
            borderRadius: 8,
            backgroundColor: '#1677FF',
          },
          title: 'Nakoruru',
          subTitle:
            'Nakoruru is a React Admin project that utilizes Antd and React 18 to provide a user-friendly and efficient interface for managing data. The project also makes use of zustand for state management, allowing for a more streamlined and organized codebase.',
          action: (
            <Button
              size="large"
              style={{
                borderRadius: 20,
                background: '#fff',
                color: '#1677FF',
                width: 120,
              }}
            >
              去看看
            </Button>
          ),
        }}
        actions={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Divider plain>
              <span style={{ color: '#CCC', fontWeight: 'normal', fontSize: 14 }}>
                其他登录方式
              </span>
            </Divider>
            <Space align="center" size={24}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 40,
                  width: 40,
                  border: '1px solid #D4D8DD',
                  borderRadius: '50%',
                }}
              >
                <AlipayOutlined style={{ ...iconStyles, color: '#1677FF' }} />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 40,
                  width: 40,
                  border: '1px solid #D4D8DD',
                  borderRadius: '50%',
                }}
              >
                <TaobaoOutlined style={{ ...iconStyles, color: '#FF6A10' }} />
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: 40,
                  width: 40,
                  border: '1px solid #D4D8DD',
                  borderRadius: '50%',
                }}
              >
                <WeiboOutlined style={{ ...iconStyles, color: '#333333' }} />
              </div>
            </Space>
          </div>
        }
      >
        <Tabs
          centered
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey as LoginType)}
        >
          <Tabs.TabPane key={'account'} tab={'账号密码登录'} />
          {/* <Tabs.TabPane key={'phone'} tab={'手机号登录'} /> */}
        </Tabs>
        {loginType === 'account' && (
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'用户名: admin or user'}
              rules={[
                {
                  required: true,
                  message: '请输入用户名!',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={'密码: 123456'}
              rules={[
                {
                  required: true,
                  message: '请输入密码！',
                },
              ]}
            />
            {captcha && (
              <ProFormText
                name="captcha"
                fieldProps={{
                  maxLength: 4,
                  placeholder: '请输入验证码',
                  size: 'middle',
                  prefix: <YuqueOutlined className={'prefixIcon'} />,
                  defaultValue: '',
                  suffix: (
                    <Space onClick={refreshCaptcha} className="cursor-pointer ml-10px">
                      <RenderSVG svgContent={captcha} />
                    </Space>
                  ),
                }}
                rules={[
                  {
                    required: true,
                    message: '请输入验证码！',
                    max: 4,
                    min: 4,
                  },
                ]}
              />
            )}
          </>
        )}
        {loginType === 'phone' && (
          <ProForm>
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: <MobileOutlined className={'prefixIcon'} />,
              }}
              name="mobile"
              placeholder={'手机号'}
              rules={[
                {
                  required: true,
                  message: '请输入手机号！',
                },
                {
                  pattern: /^1\d{10}$/,
                  message: '手机号格式错误！',
                },
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              captchaProps={{
                size: 'large',
              }}
              placeholder={'请输入验证码'}
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${'获取验证码'}`
                }
                return '获取验证码'
              }}
              name="captcha"
              rules={[
                {
                  required: true,
                  message: '请输入验证码！',
                },
              ]}
              onGetCaptcha={async () => {
                message.success('获取验证码成功！验证码为：1234')
              }}
            />
          </ProForm>
        )}
        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a
            onClick={() => {
              message.info('暂未开放')
            }}
            style={{
              float: 'right',
            }}
          >
            忘记密码
          </a>
        </div>
      </LoginFormPage>
    </div>
  )
}

export default Login
