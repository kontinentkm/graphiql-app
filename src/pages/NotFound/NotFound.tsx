import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from '@src/pages/NotFound/NotFound.module.css';

import EPages from '@src/types/enums/EPages';

const FALLBACK_MESSAGE = '404 Page Not Found!';
const LINK_TEXT = 'Go to welcome page >';

const NotFound: FC = (): JSX.Element => {
  return (
    <div className={styles.notFound}>
      <p className={styles.title}>{FALLBACK_MESSAGE}</p>
      <Link className={styles.link} to={EPages.WELCOME}>
        {LINK_TEXT}
      </Link>
    </div>
  );
};

export default NotFound;
