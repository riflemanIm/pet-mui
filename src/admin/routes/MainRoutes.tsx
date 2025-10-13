// routes/MainRoutes.tsx
import { lazy } from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import Loadable from '@admin/components/Loadable';
import Dashboard from '@admin/layout/Dashboard';
import { FoodProvider } from '@admin/context/FoodContext';
import { DictProvider, EntityName } from '@admin/context/DictContext';
import { ManagementProvider } from '@admin/context/ManagementContext';

const DashboardDefault = Loadable(lazy(() => import('@admin/pages/dashboard/index')));
const UserList = Loadable(lazy(() => import('@admin/pages/user/index')));
const EditUser = Loadable(lazy(() => import('@admin/pages/user/EditUser')));
const AddUser = Loadable(lazy(() => import('@admin/pages/user/AddUser')));

// универсальные словари (эти компоненты внутри читают useParams<{entity}>)
const DictList = Loadable(lazy(() => import('@admin/pages/dicts')));
const AddDict = Loadable(lazy(() => import('@admin/pages/dicts/AddDict')));
const EditDict = Loadable(lazy(() => import('@admin/pages/dicts/EditDict')));

const FoodList = Loadable(lazy(() => import('@admin/pages/food/FoodList')));
const AddFood = Loadable(lazy(() => import('@admin/pages/food/AddFood')));
const EditFood = Loadable(lazy(() => import('@admin/pages/food/EditFood')));

function FoodLayout() {
  return (
    <FoodProvider>
      <Outlet />
    </FoodProvider>
  );
}

function UserLayout() {
  return (
    <ManagementProvider>
      <Outlet />
    </ManagementProvider>
  );
}

function DictLayout() {
  const { entity } = useParams<{ entity: EntityName }>();
  if (!entity) {
    return <Navigate to="/dicts/ages" replace />;
  }
  return (
    <DictProvider entity={entity}>
      <Outlet />
    </DictProvider>
  );
}

function DictLegacyListRedirect() {
  const { entity } = useParams<{ entity: EntityName }>();
  if (!entity) {
    return <Navigate to="/dicts/ages" replace />;
  }
  return <Navigate to={`/dicts/${entity}`} replace />;
}

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    { path: '/', element: <DashboardDefault /> },
    {
      path: 'food',
      element: <FoodLayout />, // <- провайдер здесь
      children: [
        { path: '', element: <FoodList /> },
        { path: 'list', element: <FoodList /> },
        { path: 'add', element: <AddFood /> },
        { path: ':id/edit', element: <EditFood /> }
      ]
    },

    // Users
    {
      path: 'user',
      element: <UserLayout />,
      children: [
        { path: '', element: <UserList /> },
        { path: 'list', element: <UserList /> },
        { path: 'add', element: <AddUser /> },
        { path: ':id/edit', element: <EditUser /> }
      ]
    },

    // ===== УНИВЕРСАЛЬНЫЕ СЛОВАРИ (один набор роутов на все сущности) =====
    {
      path: 'dicts',
      children: [
        { path: '', element: <Navigate to="ages" replace /> },
        { path: ':entity/list', element: <DictLegacyListRedirect /> },
        { path: ':entity/edit', element: <DictLegacyListRedirect /> },
        {
          path: ':entity',
          element: <DictLayout />,
          children: [
            { path: '', element: <DictList /> },
            { path: 'add', element: <AddDict /> },
            { path: 'edit/:id', element: <EditDict /> }
          ]
        }
      ]
    },

    // ===== (необязательно) алиасы для старых ссылок, чтобы ничего не ломать =====
    // Можно удалить, когда переведёшь меню/ссылки на новые пути /dicts/:entity/...
    { path: 'ages/list', element: <Navigate to="/dicts/ages" replace /> },
    { path: 'ages/add', element: <Navigate to="/dicts/ages/add" replace /> },
    { path: 'ages/edit/:id', element: <Navigate to="/dicts/ages/edit/:id" replace /> },

    { path: 'taste/list', element: <Navigate to="/dicts/taste" replace /> },
    { path: 'taste/add', element: <Navigate to="/dicts/taste/add" replace /> },
    { path: 'taste/edit/:id', element: <Navigate to="/dicts/taste/edit/:id" replace /> },

    { path: 'designedFor/list', element: <Navigate to="/dicts/designedFor" replace /> },
    { path: 'designedFor/add', element: <Navigate to="/dicts/designedFor/add" replace /> },
    { path: 'designedFor/edit/:id', element: <Navigate to="/dicts/designedFor/edit/:id" replace /> },

    { path: 'ingredient/list', element: <Navigate to="/dicts/ingredient" replace /> },
    { path: 'ingredient/add', element: <Navigate to="/dicts/ingredient/add" replace /> },
    { path: 'ingredient/edit/:id', element: <Navigate to="/dicts/ingredient/edit/:id" replace /> },

    { path: 'hardness/list', element: <Navigate to="/dicts/hardness" replace /> },
    { path: 'hardness/add', element: <Navigate to="/dicts/hardness/add" replace /> },
    { path: 'hardness/edit/:id', element: <Navigate to="/dicts/hardness/edit/:id" replace /> },

    { path: 'packages/list', element: <Navigate to="/dicts/packages" replace /> },
    { path: 'packages/add', element: <Navigate to="/dicts/packages/add" replace /> },
    { path: 'packages/edit/:id', element: <Navigate to="/dicts/packages/edit/:id" replace /> },

    { path: 'petSizes/list', element: <Navigate to="/dicts/petSizes" replace /> },
    { path: 'petSizes/add', element: <Navigate to="/dicts/petSizes/add" replace /> },
    { path: 'petSizes/edit/:id', element: <Navigate to="/dicts/petSizes/edit/:id" replace /> },

    { path: 'specialNeeds/list', element: <Navigate to="/dicts/specialNeeds" replace /> },
    { path: 'specialNeeds/add', element: <Navigate to="/dicts/specialNeeds/add" replace /> },
    { path: 'specialNeeds/edit/:id', element: <Navigate to="/dicts/specialNeeds/edit/:id" replace /> },

    { path: 'typeTreat/list', element: <Navigate to="/dicts/typeTreat" replace /> },
    { path: 'typeTreat/add', element: <Navigate to="/dicts/typeTreat/add" replace /> },
    { path: 'typeTreat/edit/:id', element: <Navigate to="/dicts/typeTreat/edit/:id" replace /> }
  ]
};

export default MainRoutes;
