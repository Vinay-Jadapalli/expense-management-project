import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/loader/Loadable';
/****Layouts*****/

const FullLayout = Loadable(lazy(() => import('../layouts/FullLayout')));
/***** Pages ****/

const Classic = Loadable(lazy(() => import('../views/dashboards/Classic')));
const CustomReactTable = Loadable(lazy(() => import('../views/tables/CustomReactTable')));



const ThemeRoutes = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', name: 'Home', element: <Navigate to='dashboards/classic'/> },
      { path:'/dashboards/classic', name: 'Classic', exact: true, element: <Classic /> },
      {
        path: '/tables/react-table',
        name: 'react-table',
        exact: true,
        element: <CustomReactTable />,
      },
    
    ],
  },
  
];

export default ThemeRoutes;
