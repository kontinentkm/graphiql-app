import { FC } from 'react';

import styles from '@src/UI/Toggler/Toggler.module.css';
import ITogglerProps from '@src/types/interfaces/ITogglerProps';

import { TOGGLER_TEST_ID } from '@src/__tests__/__mocks__/testIDs';

const Toggler: FC<ITogglerProps> = ({
  callback,
  on,
  off,
  initialState,
}: ITogglerProps): JSX.Element => {
  const onChange: React.ChangeEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value: string = event.target.checked ? on : off;
    callback(value);
  };

  return (
    <label data-testid={TOGGLER_TEST_ID} className={styles.switch}>
      <input
        checked={initialState === on}
        type="checkbox"
        onChange={onChange}
      />
      <div className={`${styles.slider} ${styles.round}`}>
        <span className={styles.on}>{on.toUpperCase()}</span>
        <span className={styles.off}>{off.toUpperCase()}</span>
      </div>
    </label>
  );
};

export default Toggler;
