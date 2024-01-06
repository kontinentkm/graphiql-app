import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import LoaderSpinner from '@src/UI/LoadingSpinner/LoadingSpinner';

import { SPINNER_TEST_ID } from '@src/__tests__/__mocks__/testIDs';

describe('LoaderSpinner component', (): void => {
  test(`it's in the document`, () => {
    render(<LoaderSpinner />);
    expect(screen.getByTestId(SPINNER_TEST_ID)).toBeInTheDocument();
  });
});
