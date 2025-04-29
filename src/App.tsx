import { useEffect } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router';

import Home from 'pages/Home.tsx';
import Login from 'pages/Login.tsx';
import NotFound from 'pages/NotFound.tsx';
import { useSession } from 'store/context';

import PrivateRoute from './route/PrivateRoute.tsx';
import PublicRoute from './route/PublicRoute.tsx';

function App() {
  const { getSession } = useSession();

  useEffect(() => {
    getSession()
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        {/*<Route path="/login" element={<Login />} />*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
