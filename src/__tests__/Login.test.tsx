import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Login from '@src/pages/Login/Login';

import { store } from '@src/store/store';

import localizationStrings from '@src/constants/localizationStrings';

describe('<Login />', () => {
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

    expect(
      screen.getByPlaceholderText(localizationStrings.en.login[1])
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(localizationStrings.en.login[2])
    ).toBeInTheDocument();

    expect(
      screen.getByText(localizationStrings.en.login[3])
    ).toBeInTheDocument();
    expect(
      screen.getByText(localizationStrings.en.login[5])
    ).toBeInTheDocument();
  });
});
