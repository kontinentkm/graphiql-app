import { FC } from 'react';
import { Link } from 'react-router-dom';

import EPages from '@src/types/enums/EPages';

const FALLBACK_MESSAGE = '404 Page Not Found!';
const LINK_TEXT = 'Go to welcome page >';

const NotFound: FC = (): JSX.Element => {
  return (
    <div>
      <p>{FALLBACK_MESSAGE}</p>
      <Link to={EPages.WELCOME}>{LINK_TEXT}</Link>
    </div>
  );
};

export default NotFound;
