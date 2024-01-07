import { render, screen, cleanup, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/';

import Register from '@src/pages/Register/Register';

import { store } from '@src/store/store';

import localizationStrings from '@src/constants/localizationStrings';

jest.mock('react-firebase-hooks/auth', () => ({
  useAuthState: jest.fn(() => [{}, false, null]),
}));

describe('<Register />', () => {
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
              <Register />
            </MemoryRouter>
          </Provider>
        </>
      );
    });

    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Enter you password')
    ).toBeInTheDocument();

    expect(
      screen.getByText(localizationStrings.en.register[4])
    ).toBeInTheDocument();
  });
});
