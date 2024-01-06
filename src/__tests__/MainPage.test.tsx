import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import Main from '@src/pages/Main/Main';

import localizationStrings from '@src/constants/localizationStrings';
import { SCHEMA_WINDOW_TEST_ID } from '@src/__tests__/__mocks__/testIDs';

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
});

describe('OnSchema button click test', () => {
  it('when it happens schemaWindow has visible class', async (): Promise<void> => {
    (
      jest.requireMock('react-redux') as { useSelector: jest.Mock }
    ).useSelector.mockReturnValue('en');

    render(<Main />);

    const button: HTMLButtonElement = screen.getByText(
      localizationStrings.en.schema_btn
    );

    const schemaWindow = screen.getByTestId(SCHEMA_WINDOW_TEST_ID);

    await waitFor(() => {
      fireEvent.click(button);
    });
    expect(schemaWindow).toHaveClass('visible');

    jest.clearAllMocks();
  });
});
