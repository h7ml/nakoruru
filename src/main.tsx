import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import 'virtual:windi.css'
import '@/styles/global.less'
import '@/styles/antd.less'
import 'reset-css'

createRoot(document.getElementById('root') as Element).render(
  <HashRouter basename="/">
    <App />
  </HashRouter>,
)
