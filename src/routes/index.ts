import React from 'react';

const Home = React.lazy(() => import('../pages/Home/Home'));

const routes = [
  {
    path: '/',
    component: Home,
  },
];

export default routes;
