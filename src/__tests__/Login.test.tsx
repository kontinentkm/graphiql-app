import { render, screen, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Login from '@src/pages/Login/Login';

import { store } from '@src/store/store';

import localizationStrings from '@src/constants/localizationStrings';

jest.mock('@src/firebase', () => ({
  ...jest.requireActual('@src/firebase'),
  login: jest.fn(),
  auth: jest.fn(),
}));

jest.mock('react-firebase-hooks/auth', () => ({
  useAuthState: jest.fn(() => [null, false, null]),
}));

describe('<Login />', () => {
  beforeEach(() => {
    jest.mock('@src/firebase', () => ({
      ...jest.requireActual('@src/firebase'),
      auth: jest.fn(),
    }));
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('renders the Login component with necessary elements', async () => {
    await waitFor(() => {
      render(
        <>
          <Provider store={store}>
            <MemoryRouter>
              <Login />
            </MemoryRouter>
          </Provider>
        </>
      );
    });

    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Enter your password')
    ).toBeInTheDocument();

    expect(
      screen.getByText(localizationStrings.en.login[3])
    ).toBeInTheDocument();
    expect(
      screen.getByText(localizationStrings.en.login[5])
    ).toBeInTheDocument();
  });
});
