import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

// Protected is a custom component built
// for protecting manager routes

interface ProtectedProps {
  isManager: boolean;
  children: React.ReactNode;
}

const Protected: FC<ProtectedProps> = ({ isManager, children }) => {
  if (!isManager) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default Protected;