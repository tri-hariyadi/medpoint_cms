import { ReactNode } from 'react';

import { Navigate } from 'react-router';

import { Loading } from 'components';
import { useSession } from 'store/context';

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
