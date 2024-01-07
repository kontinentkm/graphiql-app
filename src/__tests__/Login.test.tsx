import '@testing-library/jest-dom/';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import Login from '@src/pages/Login/Login';
import { Provider } from 'react-redux';
import { store } from '@src/store/store';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { UserCredential } from 'firebase/auth';
import { authMock } from './__mocks__/firebaseMocks';

// eslint-disable-next-line no-var
var mockAuth = authMock() as unknown as jest.Mocked<{
  signInAndRetrieveDataWithEmailAndPassword: jest.Mock<
    Promise<UserCredential>,
    [string, string]
  >;
}>;

jest.mock('@src/firebase', () => ({
  ...jest.requireActual('@src/firebase'),
  auth: mockAuth,
}));

jest.mock('react-firebase-hooks/auth', () => ({
  useAuthState: jest.fn(() => [null, false, null]),
}));

describe('<Login />', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('calls Firebase login on form submission', async () => {
    mockAuth.signInAndRetrieveDataWithEmailAndPassword.mockResolvedValueOnce({
      user: {
        uid: '123',
        email: '123@test.com',
        emailVerified: false,
        isAnonymous: false,
        metadata: {
          creationTime: `${Date.now()}`,
          lastSignInTime: `${Date.now()}`,
        },
        providerData: [],
        refreshToken: '',
        tenantId: null,
      },
    } as never);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');

    fireEvent.change(emailInput, { target: { value: '123@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Password123!' } });

    await act(async () => {
      fireEvent.submit(screen.getByRole('form'));
    });

    expect(
      mockAuth.signInAndRetrieveDataWithEmailAndPassword
    ).toHaveBeenCalledWith('123@test.com', 'Password123!');
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
