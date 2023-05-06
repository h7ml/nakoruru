import { lazy, Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
// import Loading from './components/Layout/Loading';

const Home = lazy(() => import('./pages/Home'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <div>Not Found</div>,
  },
];

export default function Router() {
  const element = useRoutes(routes);

  return element;
}
