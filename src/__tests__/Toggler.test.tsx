import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import ITogglerProps from '@src/types/interfaces/ITogglerProps';

import Toggler from '@src/UI/Toggler/Toggler';

import { TOGGLER_TEST_ID } from '@src/__tests__/__mocks__/testIDs';

const props: ITogglerProps = {
  callback: (value: string): void => console.log('fake handler' + value),
  on: 'on_value',
  off: 'off_value',
  initialState: 'on_value',
};

describe('Toggler component', (): void => {
  test(`it's in the document`, () => {
    render(<Toggler {...props} />);
    expect(screen.getByTestId(TOGGLER_TEST_ID)).toBeInTheDocument();
  });

  test('it execute given callback', async (): Promise<void> => {
    const mockFunc = jest.fn();

    render(<Toggler {...{ ...props, callback: mockFunc }} />);

    const input: HTMLInputElement = screen.getByRole('checkbox');

    await waitFor(() => {
      fireEvent.click(input);
      expect(mockFunc).toHaveBeenCalled();
    });
  });
});
