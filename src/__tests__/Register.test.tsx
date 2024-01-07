import Register from '@src/pages/Register/Register';
import { render, screen, cleanup, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@src/store/store';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/';

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

  it('should display a success message after registration', () => {
    act(() => {
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

    const successMessage = screen.getByText(
      'You have successfully logged in as'
    );
    expect(successMessage).toBeInTheDocument();
  });
});
