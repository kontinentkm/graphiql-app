import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import {
  Route,
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Fallback from '@src/components/Fallback/Fallback';
import { store } from '@src/store/store';
import Layout from '@src/components/Layout/Layout';

import { FALLBACK_TEST_ID } from '@src/__tests__/__mocks__/testIDs';

test(`Fallback is in the document`, async (): Promise<void> => {
  const router = createMemoryRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Fallback />}>
        <Route index element={<Fallback />}></Route>
      </Route>
    )
  );

  await waitFor(() => {
    (
      jest.requireMock('react-redux') as { useSelector: jest.Mock }
    ).useSelector.mockReturnValue('en');

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
  });

  expect(screen.getByTestId(FALLBACK_TEST_ID)).toBeInTheDocument();
});
