import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/loader/Loadable';
/****Layouts*****/

const FullLayout = Loadable(lazy(() => import('../layouts/FullLayout')));
/***** Pages ****/

const Classic = Loadable(lazy(() => import('../views/dashboards/Classic')));


const ThemeRoutes = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', name: 'Home', element: <Navigate to="/dashboards/classic" /> },
      { path: '/dashboards/classic', name: 'Classic', exact: true, element: <Classic /> },
    ],
  },
 
];

export default ThemeRoutes;
