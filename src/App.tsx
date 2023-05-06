import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider, message, theme, App as AntdApp } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ReactFlowProvider } from 'react-flow-renderer';
import { queryClient } from './plugins/ReactQuery';
import Loading from './components/Layout/Loading';
import Router from './Router';

message.config({ maxCount: 3 });

export default function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider
          locale={zhCN}
          autoInsertSpaceInButton={false}
          theme={{
            algorithm: theme.darkAlgorithm,
            token: {
              colorPrimary: '#7262FD',
              fontSize: 12,
              borderRadius: 2,
              colorBgContainer: '#181b23',
              colorText: '#b4b7c1',
            },
          }}>
          <AntdApp className="h-full">
            <ReactFlowProvider>
              <DndProvider backend={HTML5Backend}>
                <Suspense fallback={<Loading />}>
                  <Router />
                </Suspense>
              </DndProvider>
            </ReactFlowProvider>
          </AntdApp>
        </ConfigProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
