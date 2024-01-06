import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome from '@src/pages/Welcome/Welcome';
import '@testing-library/jest-dom';
import localizationStrings from '@src/constants/localizationStrings';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Welcome page', () => {
  it('Renders Welcome page with english localization', () => {
    (
      jest.requireMock('react-redux') as { useSelector: jest.Mock }
    ).useSelector.mockReturnValue('en');

    render(<Welcome />);

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

  it('Renders Welcome page with russian localization', () => {
    (
      jest.requireMock('react-redux') as { useSelector: jest.Mock }
    ).useSelector.mockReturnValue('ru');

    render(<Welcome />);

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
