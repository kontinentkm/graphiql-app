const authObjectMock = {
  createUserAndRetrieveDataWithEmailAndPassword: jest.fn(() =>
    Promise.resolve(true)
  ),
  sendPasswordResetEmail: jest.fn(() => Promise.resolve(true)),
  signInAndRetrieveDataWithEmailAndPassword: jest.fn(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_email: string, _password: string) => Promise.resolve(true)
  ),
  fetchSignInMethodsForEmail: jest.fn(() => Promise.resolve(true)),
  signOut: jest.fn(() => Promise.resolve(true)),
  onAuthStateChanged: jest.fn(),
};

const authMock = jest.fn(() => authObjectMock);

export { authMock };
