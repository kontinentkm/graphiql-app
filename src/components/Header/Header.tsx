import { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@src/hooks/reduxHooks';

import {
  authorize,
  selectAuthorization,
} from '@src/store/AuthorizationSlice/AuthorizationSlice';

import styles from '@src/components/Header/Header.module.css';
import layout from '@src/components/Layout/Layout.module.css';

import EPages from '@src/types/enums/EPages';

import { APP_TITLE } from '@src/constants/global';

import Toggler from '@src/UI/Toggler/Toggler';

const Header: FC = (): JSX.Element => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const authorized: boolean = useSelector(selectAuthorization);

  const unauthorizeBTNClick = () => dispatch(authorize(false));

  return (
    <header className={styles.header}>
      <div className={`${layout.wrapper} ${styles.wrapper}`}>
        <h1 className={styles.title}>{APP_TITLE}</h1>

        <nav className={styles.navigation}>
          <NavLink to={EPages.WELCOME}>{EPages.WELCOME}</NavLink>
          {authorized && <NavLink to={EPages.MAIN}>{EPages.MAIN}</NavLink>}
        </nav>

        {authorized ? (
          <button type="button" onClick={unauthorizeBTNClick}>
            Sign Out
          </button>
        ) : (
          <div className={styles.buttons}>
            <button
              type="button"
              onClick={(): void => navigate(EPages.SIGN_IN)}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={(): void => navigate(EPages.SIGN_UP)}
            >
              Sign Up
            </button>
          </div>
        )}

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
