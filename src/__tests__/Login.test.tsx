import '@testing-library/jest-dom/';
import { render, screen, cleanup } from '@testing-library/react';
import Login from '@src/pages/Login/Login';
import { Provider } from 'react-redux';
import { store } from '@src/store/store';
import { MemoryRouter } from 'react-router-dom';

jest.mock('react-firebase-hooks/auth', () => ({
  useAuthState: jest.fn(() => [null, false, null]),
}));

describe('<Login />', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('renders the Register component when one clicks on the register button', async () => {
    render(
      <>
        <Provider store={store}>
          <MemoryRouter>
            <Login />
          </MemoryRouter>
        </Provider>
      </>
    );

    const registerButton = screen.getByRole('button', {
      name: /Create account/i,
    });

    expect(registerButton).toBeInTheDocument();
  });
});
