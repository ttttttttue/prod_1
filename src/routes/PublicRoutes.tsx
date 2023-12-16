import React, { lazy } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';

import { checkPathMatch, paths } from './helpers';

const HomePage: React.FC = lazy(() => import('pages/HomePage'));
const ProductDetailsPage: React.FC = lazy(() => import('pages/ProductDetailsPage'));

export const PublicRoutes: React.FC = () => {
  const location = useLocation();
  const isMatch: boolean = checkPathMatch(location.pathname, paths);

  return (
    <Routes>
      <Route path={paths.home} element={<HomePage />} />
      <Route path={paths.productDetails} element={<ProductDetailsPage />} />
      <Route path="*" element={!isMatch ? <Navigate to={paths.home} /> : null} />
    </Routes>
  );
};
