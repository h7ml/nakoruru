import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider, message, App as AntdApp } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ReactFlowProvider } from 'react-flow-renderer';
import { RecoilDevtools, queryClient } from '@/plugins';
import { GitHubCorners, Loading, SiderBar } from "@/components"
message.config({ maxCount: 3 });
export default function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider
          locale={zhCN}
          autoInsertSpaceInButton={false} >
          <AntdApp className="h-full">
            <ReactFlowProvider>
              <DndProvider backend={HTML5Backend}>
                <Suspense fallback={<Loading />}>
                  <RecoilDevtools />
                  <SiderBar />
                  <GitHubCorners />
                </Suspense>
              </DndProvider>
            </ReactFlowProvider>
          </AntdApp>
        </ConfigProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
