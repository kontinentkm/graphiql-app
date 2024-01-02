import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '@src/components/Header/Header';
import '@testing-library/jest-dom';
import localizationStrings from '@src/constants/localizationStrings';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Welcome page', () => {
  it('Renders Main page with english localization', () => {
    (
      jest.requireMock('react-redux') as { useSelector: jest.Mock }
    ).useSelector.mockReturnValue('en');

    render(<Header />);
    screen.debug();

    expect(
      screen.getByText(localizationStrings.en.loginBtn)
    ).toBeInTheDocument();

    jest.clearAllMocks();
  });
});
