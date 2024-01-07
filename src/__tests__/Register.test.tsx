import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/';

import Register from '@src/pages/Register/Register';

import { store } from '@src/store/store';

import localizationStrings from '@src/constants/localizationStrings';

describe('<Register />', () => {
  it('renders the Register component with necessary elements', async () => {
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

    expect(
      screen.getByPlaceholderText(localizationStrings.en.register[2])
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(localizationStrings.en.register[4])
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(localizationStrings.en.register[6])
    ).toBeInTheDocument();

    expect(
      screen.getByText(localizationStrings.en.register[7])
    ).toBeInTheDocument();
  });
});
