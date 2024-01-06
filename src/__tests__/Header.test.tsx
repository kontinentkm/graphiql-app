import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from '@src/components/Header/Header';
import { store } from '@src/store/store';

import localizationStrings from '@src/constants/localizationStrings';
import { APP_TITLE } from '@src/constants/global';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Header', () => {
  it('Renders Header page with english localization', async () => {
    await waitFor(() => {
      (
        jest.requireMock('react-redux') as { useSelector: jest.Mock }
      ).useSelector.mockReturnValue('en');

      render(
        <MemoryRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </MemoryRouter>
      );
    });

    expect(screen.getByText(APP_TITLE)).toBeInTheDocument();

    expect(
      screen.getByText(localizationStrings.en.welcome)
    ).toBeInTheDocument();

    expect(
      screen.getByText(localizationStrings.en.loginBtn)
    ).toBeInTheDocument();

    const togglerElement = screen.getByTestId('toggler');
    expect(togglerElement).toBeInTheDocument();

    jest.clearAllMocks();
  });

  it('Renders Header page with russian localization', async () => {
    await waitFor(() => {
      (
        jest.requireMock('react-redux') as { useSelector: jest.Mock }
      ).useSelector.mockReturnValue('ru');

      render(
        <MemoryRouter>
          <Provider store={store}>
            <Header />
          </Provider>
        </MemoryRouter>
      );
    });

    expect(screen.getByText(APP_TITLE)).toBeInTheDocument();

    expect(
      screen.getByText(localizationStrings.ru.welcome)
    ).toBeInTheDocument();

    expect(
      screen.getByText(localizationStrings.ru.loginBtn)
    ).toBeInTheDocument();

    const togglerElement = screen.getByTestId('toggler');
    expect(togglerElement).toBeInTheDocument();

    jest.clearAllMocks();
  });
});
