import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
//import LoginPage from './pages/login/Login';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
<<<<<<< HEAD
import OAuth from './pages/login/OAuth';
import UserInfo from './pages/login/UserInfo';
=======
import OAuth from './pages/OAuth';
>>>>>>> 1fff721 (feat(api) : 카카오 로그인 중 JWT 받아서 로컬에 저장)

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/login" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
<<<<<<< HEAD
    // 토큰 발급 uri
    {
      path: '/user/kakao/oauth',
      element: <OAuth />
    },
    // 사용자 정보 요청 uri
    {
      path: '/user/kakao/info',
      element: <UserInfo />
=======
    {
      path: '/user/kakao/oauth',
      element: <OAuth />
>>>>>>> 1fff721 (feat(api) : 카카오 로그인 중 JWT 받아서 로컬에 저장)
    }
  ]);

  return routes;
}
