import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '@src/pages/Main/Main';
import '@testing-library/jest-dom';
import localizationStrings from '@src/constants/localizationStrings';

document.createRange = () => {
  const range = new Range();

  range.getBoundingClientRect = jest.fn();

  range.getClientRects = () => {
    return {
      item: () => null,
      length: 0,
      [Symbol.iterator]: jest.fn(),
    };
  };

  return range;
};

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Main page', () => {
  it('Renders Main page with english localization', () => {
    (
      jest.requireMock('react-redux') as { useSelector: jest.Mock }
    ).useSelector.mockReturnValue('en');

    render(<Main />);

    expect(
      screen.getByText(localizationStrings.en.prettify_btn)
    ).toBeInTheDocument();

    expect(
      screen.getByText(localizationStrings.en.results_btn)
    ).toBeInTheDocument();

    expect(
      screen.getByText(localizationStrings.en.schema_btn)
    ).toBeInTheDocument();

    expect(screen.getByTestId('suggestions')).toBeInTheDocument();

    expect(screen.getByText(localizationStrings.en.query)).toBeInTheDocument();

    expect(
      screen.getByText(localizationStrings.en.edit_btn_results)
    ).toBeInTheDocument();

    expect(
      screen.getByText(localizationStrings.en.variables_btn)
    ).toBeInTheDocument();

    expect(
      screen.getByText(localizationStrings.en.headers_btn)
    ).toBeInTheDocument();

    jest.clearAllMocks();
  });

  it('Renders Main page with russian localization', () => {
    (
      jest.requireMock('react-redux') as { useSelector: jest.Mock }
    ).useSelector.mockReturnValue('ru');

    render(<Main />);

    expect(
      screen.getByText(localizationStrings.ru.prettify_btn)
    ).toBeInTheDocument();

    expect(
      screen.getByText(localizationStrings.ru.results_btn)
    ).toBeInTheDocument();

    expect(
      screen.getByText(localizationStrings.ru.schema_btn)
    ).toBeInTheDocument();

    expect(screen.getByTestId('suggestions')).toBeInTheDocument();

    expect(screen.getByText(localizationStrings.ru.query)).toBeInTheDocument();

    expect(
      screen.getByText(localizationStrings.ru.edit_btn_results)
    ).toBeInTheDocument();

    expect(
      screen.getByText(localizationStrings.ru.variables_btn)
    ).toBeInTheDocument();

    expect(
      screen.getByText(localizationStrings.ru.headers_btn)
    ).toBeInTheDocument();

    jest.clearAllMocks();
  });
});
