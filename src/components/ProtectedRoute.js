import * as React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Component, ...props }) {
  return props.isLoggedIn ? Component : <Navigate to="/" replace />;
}

export default ProtectedRoute;
