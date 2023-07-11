import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import 'virtual:windi.css'
import '@/styles/global.less'
import '@/styles/antd.less'
import 'reset-css'
import 'reactflow/dist/style.css'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
  parent: '#root'
});

createRoot(document.getElementById('root') as Element).render(
  // <HashRouter basename="/">
  <App />
  // </HashRouter>,
)
