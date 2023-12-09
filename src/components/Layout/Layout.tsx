import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import styles from '@src/components/Layout/Layout.module.css';
import { EPages } from '@src/types/enums/EPages';

const TITLE = 'QraphiQL';

const Layout: FC = (): JSX.Element => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <nav className={styles.navigation}>
            <h1 className={styles.title}>{TITLE}</h1>
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
    </>
  );
};

export default Layout;
