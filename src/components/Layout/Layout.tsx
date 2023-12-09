import { FC } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import styles from '@src/components/Layout/Layout.module.css';
import EPages from '@src/types/enums/EPages';

import { capitalize } from '@src/utils/StringTransform';

import { APP_TITLE } from '@src/constants/global';
import favicon from '@src/assets/graphql.png';

// for testing
import { useAppDispatch } from '@src/hooks/reduxHooks';
import { useSelector } from 'react-redux';
import {
  authorize,
  selectAuthorization,
} from '@src/store/AuthorizationSlice/AuthorizationSlice';
//_________________________

const Layout: FC = (): JSX.Element => {
  const { pathname } = useLocation();
  const pageName = capitalize(pathname.slice(1));

  // for testing
  const dispatch = useAppDispatch();
  const authorized = useSelector(selectAuthorization);
  const authorizationToggle = () => dispatch(authorize(!authorized));
  console.log(authorized);
  //________________________

  return (
    <HelmetProvider>
      <Helmet title={`${pageName}`} link={[{ rel: 'icon', href: favicon }]} />

      <header className={styles.header}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>{APP_TITLE}</h1>
          <nav className={styles.navigation}>
            <NavLink to={EPages.MAIN}>{EPages.MAIN}</NavLink>
            <NavLink to={EPages.WELCOME}>{EPages.WELCOME}</NavLink>
            <NavLink to={EPages.SIGN_IN}>{EPages.SIGN_IN}</NavLink>
            <NavLink to={EPages.SIGN_UP}>{EPages.SIGN_UP}</NavLink>
          </nav>

          {/*for testing */}
          <div>
            <label htmlFor="test-authorization"></label>
            <input
              type="checkbox"
              id="test-authorization"
              onChange={authorizationToggle}
            />
          </div>
          {/*__________________ */}
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.wrapper}>
          <Outlet />
        </div>
      </main>
    </HelmetProvider>
  );
};

export default Layout;
