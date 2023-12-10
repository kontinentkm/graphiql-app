import { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import styles from '@src/components/Header/Header.module.css';
import layout from '@src/components/Layout/Layout.module.css';

import EPages from '@src/types/enums/EPages';

import { APP_TITLE } from '@src/constants/global';

import Toggler from '@src/UI/Toggler/Toggler';

const Header: FC = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={`${layout.wrapper} ${styles.wrapper}`}>
        <h1 className={styles.title}>{APP_TITLE}</h1>

        <nav className={styles.navigation}>
          <NavLink to={EPages.WELCOME}>{EPages.WELCOME}</NavLink>
          <NavLink to={EPages.MAIN}>{EPages.MAIN}</NavLink>
        </nav>

        <div className={styles.buttons}>
          <button type="button" onClick={(): void => navigate(EPages.SIGN_IN)}>
            Sign In
          </button>
          <button type="button" onClick={(): void => navigate(EPages.SIGN_UP)}>
            Sign Up
          </button>
        </div>

        <Toggler
          on="en"
          off="ru"
          callback={(value: string): void => console.log(value)}
        />
      </div>
    </header>
  );
};

export default Header;
