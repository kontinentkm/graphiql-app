import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import CustomButton, { IButtonProps } from '@src/UI/CustomButton/CustomButton';

const props: IButtonProps = {
  label: 'Click here',
  onClick: (): void => console.log('fake handler'),
  type: 'button',
  disabled: false,
};

describe('CustomButton component', (): void => {
  test(`it's in the document`, () => {
    render(<CustomButton {...props} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
