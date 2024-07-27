import { Navigate } from 'react-router-dom';

export type PrivateRouteProps = {
  children: React.ReactNode;
};

export function PrivateRoute({ children }: PrivateRouteProps) {
  const isAuthenticated = false;
  if (!isAuthenticated) return <Navigate to="/" replace />;
  return children;
}
