import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import Welcome from '@src/pages/Welcome/Welcome';
import { store } from '@src/store/store';

import localizationStrings from '@src/constants/localizationStrings';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Welcome page', () => {
  it('Renders Welcome page with english localization', async () => {
    await waitFor(() => {
      (
        jest.requireMock('react-redux') as { useSelector: jest.Mock }
      ).useSelector.mockReturnValue('en');

      render(
        <MemoryRouter>
          <Provider store={store}>
            <Welcome />
          </Provider>
        </MemoryRouter>
      );
    });

    expect(
      screen.getByText(localizationStrings.en.ourTeam)
    ).toBeInTheDocument();

    localizationStrings.en.developers.forEach((developer) => {
      expect(screen.getByAltText(developer.name)).toHaveAttribute(
        'src',
        developer.photo
      );
      expect(screen.getByText(developer.name)).toBeInTheDocument();
      expect(screen.getAllByText(developer.position)[0]).toBeInTheDocument();
      expect(screen.getByText(developer.github)).toBeInTheDocument();
    });

    expect(
      screen.getByText(localizationStrings.en.project_title)
    ).toBeInTheDocument();
    expect(
      screen.getByText(localizationStrings.en.project_text)
    ).toBeInTheDocument();
    expect(
      screen.getByText(localizationStrings.en.course_title)
    ).toBeInTheDocument();
    expect(
      screen.getByText(localizationStrings.en.course_text)
    ).toBeInTheDocument();

    jest.clearAllMocks();
  });

  it('Renders Welcome page with russian localization', async () => {
    await waitFor(() => {
      (
        jest.requireMock('react-redux') as { useSelector: jest.Mock }
      ).useSelector.mockReturnValue('ru');

      render(
        <MemoryRouter>
          <Provider store={store}>
            <Welcome />
          </Provider>
        </MemoryRouter>
      );
    });

    expect(
      screen.getByText(localizationStrings.ru.ourTeam)
    ).toBeInTheDocument();

    localizationStrings.ru.developers.forEach((developer) => {
      expect(screen.getByAltText(developer.name)).toHaveAttribute(
        'src',
        developer.photo
      );
      expect(screen.getByText(developer.name)).toBeInTheDocument();
      expect(screen.getAllByText(developer.position)[0]).toBeInTheDocument();
      expect(screen.getByText(developer.github)).toBeInTheDocument();
    });

    expect(
      screen.getByText(localizationStrings.ru.project_title)
    ).toBeInTheDocument();
    expect(
      screen.getByText(localizationStrings.ru.project_text)
    ).toBeInTheDocument();
    expect(
      screen.getByText(localizationStrings.ru.course_title)
    ).toBeInTheDocument();
    expect(
      screen.getByText(localizationStrings.ru.course_text)
    ).toBeInTheDocument();
    jest.clearAllMocks();
  });
});
