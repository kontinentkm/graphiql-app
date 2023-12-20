import { FC } from 'react';

import styles from '@src/UI/Toggler/Toggler.module.css';
import ITogglerProps from '@src/types/interfaces/ITogglerProps';

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
    <label className={styles.switch}>
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
