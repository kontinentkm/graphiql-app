import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Fallback from '@src/components/Fallback/Fallback';
import Layout from '@src/components/Layout/Layout';
import NotFound from '@src/pages/NotFound/NotFound';

import useCustomRouter from '@src/router/Router';
import { privateRoutes } from '@src/router/routes';

const fakeUser = { name: 'John' };

jest.mock('react-firebase-hooks/auth', () => ({
  ...jest.requireActual('react-firebase-hooks/auth'),
  useAuthState: jest.fn(() => [fakeUser, false]),
}));

test('should return private routes', async () => {
  const hookResult = useCustomRouter();
  const expectedResult = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Fallback />}>
        {privateRoutes}

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  expect(hookResult.routes.routes).toEqual(expectedResult.routes);
});
