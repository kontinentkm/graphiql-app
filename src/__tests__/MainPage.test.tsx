import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '@src/pages/Main/Main';
import '@testing-library/jest-dom';
import localizationStrings from '@src/constants/localizationStrings';

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
    screen.debug();

    expect(screen.getByText(localizationStrings.en.main)).toBeInTheDocument();

    jest.clearAllMocks();
  });
});
