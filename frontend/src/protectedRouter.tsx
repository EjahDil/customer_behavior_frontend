// components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

const ProtectedRoute: React.FC = () => {
  const { user } = useAuthContext();

  if (!user)  {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;