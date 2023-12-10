import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectAuthorization } from '@src/store/AuthorizationSlice/AuthorizationSlice';

import { privateRoutes, publicRoutes } from '@src/router/routes';

import Layout from '@src/components/Layout/Layout';
import NotFound from '@src/pages/NotFound/NotFound';
import Fallback from '@src/components/Fallback/Fallback';

const useCustomRouter = () => {
  const authorized: boolean = useSelector(selectAuthorization);

  return createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Fallback />}>
        {authorized ? privateRoutes : publicRoutes}

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
};

export default useCustomRouter;
