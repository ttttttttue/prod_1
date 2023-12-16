import React, { lazy } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';

import { checkPathMatch, paths } from './helpers';

const AccountSettingsPage = lazy(() => import('pages/AccountSettingsPage'));

export const PrivateRoutes: React.FC = () => {
  const location = useLocation();
  const isMatch: boolean = checkPathMatch(location.pathname, paths);

  return (
    <Routes>
      <Route path={paths.accountSettings} element={<AccountSettingsPage />} />
      <Route path="*" element={!isMatch ? <Navigate to={paths.home} /> : null} />
    </Routes>
  );
};
