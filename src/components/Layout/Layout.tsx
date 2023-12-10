import { FC } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import styles from '@src/components/Layout/Layout.module.css';
import EPages from '@src/types/enums/EPages';

import { capitalize } from '@src/utils/StringTransform';

import { APP_TITLE } from '@src/constants/global';
import favicon from '@src/assets/graphql.png';

const Layout: FC = (): JSX.Element => {
  const { pathname } = useLocation();
  const pageName = capitalize(pathname.slice(1));

  return (
    <HelmetProvider>
      <Helmet title={`${pageName}`} link={[{ rel: 'icon', href: favicon }]} />

      <header className={styles.header}>
        <div className={styles.wrapper}>
          <nav className={styles.navigation}>
            <h1 className={styles.title}>{APP_TITLE}</h1>
            <NavLink to={EPages.MAIN}>{EPages.MAIN}</NavLink>
            <NavLink to={EPages.WELCOME}>{EPages.WELCOME}</NavLink>
            <NavLink to={EPages.SIGN_IN}>{EPages.SIGN_IN}</NavLink>
            <NavLink to={EPages.SIGN_UP}>{EPages.SIGN_UP}</NavLink>
          </nav>
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
