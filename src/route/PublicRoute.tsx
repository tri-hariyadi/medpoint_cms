import { ReactNode } from 'react';

import { Navigate } from 'react-router';
import { useSession } from 'store/context';

import { Loading } from 'components';

interface PrivateRouteProps {
  children: ReactNode;
}

const PublicRoute = ({ children }: PrivateRouteProps) => {
  const { session } = useSession();

  if (session?.isLoading) return <Loading />;

  if (session?.token && !session?.isLoading) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;
