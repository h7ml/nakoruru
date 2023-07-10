import { Suspense } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { App as AntdApp, ConfigProvider, message } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { ReactFlowProvider } from 'reactflow'
import { queryClient } from '@/plugins'
import { GitHubCorners, Loading, ProMain } from '@/components'

// import router from './router'
message.config({ maxCount: 3 })
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={zhCN} autoInsertSpaceInButton={false}>
        <AntdApp className="h-full">
          <ReactFlowProvider>
            {/* <DndProvider backend={HTML5Backend}> */}
            <Suspense fallback={<Loading />}>
              <ProMain />
              {/* <RouterProvider router={router} /> */}
              <GitHubCorners />
            </Suspense>
            {/* </DndProvider> */}
          </ReactFlowProvider>
        </AntdApp>
      </ConfigProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
