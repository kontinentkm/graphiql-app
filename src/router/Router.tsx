import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { auth } from '@src/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import { privateRoutes, publicRoutes } from '@src/router/routes';

import Layout from '@src/components/Layout/Layout';
import NotFound from '@src/pages/NotFound/NotFound';
import Fallback from '@src/components/Fallback/Fallback';

const useCustomRouter = () => {
  const [user] = useAuthState(auth);

  return createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Fallback />}>
        {user ? privateRoutes : publicRoutes}

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
};

export default useCustomRouter;
