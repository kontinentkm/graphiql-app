import React from 'react';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@src/store/store';
import Footer from '@src/components/Footer/Footer';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Footer', () => {
  it('Renders Footer page with english localization', () => {
    (
      jest.requireMock('react-redux') as { useSelector: jest.Mock }
    ).useSelector.mockReturnValue('en');

    act(() => {
      render(
        <Router>
          <Provider store={store}>
            <Footer />
          </Provider>
        </Router>
      );
    });

    const link = screen.getByRole('link', {
      name: /rss/i,
    }) as HTMLAnchorElement;
    expect(link).toBeInTheDocument();

    const image = screen.getByAltText(/rss-logo/i) as HTMLImageElement;
    expect(image).toBeInTheDocument();

    expect(screen.getByText('2024')).toBeInTheDocument();

    const githubLinks = screen.getAllByRole('link', { name: /github-logo/i });
    expect(githubLinks).toHaveLength(3);
    githubLinks.forEach((link) => {
      expect(link).toHaveAttribute('href');
      expect(link).toHaveAttribute('rel', 'noreferrer');
      expect(link).toHaveAttribute('target', '_blank');
    });

    const githubImages = screen.getAllByAltText(
      /github-logo/i
    ) as HTMLImageElement[];
    expect(githubImages).toHaveLength(3);

    jest.clearAllMocks();
  });
});
