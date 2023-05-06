import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import 'virtual:windi.css';

// import 'antd/dist/antd.dark.less';

// import './styles/global.less';
// import './styles/antd.less';

createRoot(document.getElementById('root') as Element).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
