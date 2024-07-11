import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getToken } from '../services/AuthService';

interface PrivateRouteProps {
  path: string;
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element }) => {
  const token = getToken();

  return token ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
