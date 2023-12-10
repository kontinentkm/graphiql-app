import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import styles from '@src/components/Layout/Layout.module.css';

import { capitalize } from '@src/utils/StringTransform';

import favicon from '@src/assets/graphql.png';

import Footer from '@src/components/Footer/Footer';
import Header from '@src/components/Header/Header';

const Layout: FC = (): JSX.Element => {
  const { pathname } = useLocation();
  const pageName = capitalize(pathname.slice(1));

  return (
    <HelmetProvider>
      <Helmet title={`${pageName}`} link={[{ rel: 'icon', href: favicon }]} />
      <Header />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </HelmetProvider>
  );
};

export default Layout;
