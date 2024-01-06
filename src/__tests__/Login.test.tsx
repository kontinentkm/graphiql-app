import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/';
import Login from '@src/pages/Login/Login';
import { Provider } from 'react-redux';
import { store } from '@src/store/store';
import { MemoryRouter } from 'react-router-dom';

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

  it('calls Firebase login on form submission', async () => {
    const { getByLabelText, getByText } = render(
      <>
        <Provider store={store}>
          <MemoryRouter>
            <Login />
          </MemoryRouter>
        </Provider>
      </>
    );
    const emailInput = getByLabelText('Email');
    const passwordInput = getByLabelText('Password');
    const submitButton = getByText('Login');

    fireEvent.change(emailInput, { target: { value: '123@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(require('@src/firebase').login).toHaveBeenCalledWith(
      '123@test.com',
      'password123'
    );
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
