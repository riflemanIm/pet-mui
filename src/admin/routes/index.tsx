import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const basename = process.env.NEXT_PUBLIC_ADMIN_BASE_PATH || '/admin';
const router = createBrowserRouter([MainRoutes, LoginRoutes], { basename });

export default function Routing() {
  return <RouterProvider router={router} />;
}
