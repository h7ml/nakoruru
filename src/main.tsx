import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'virtual:windi.css';
createRoot(document.getElementById('root') as Element).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
