import { FC, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@src/hooks/reduxHooks';

import {
  selectLocalization,
  changeLanguage,
} from '@src/store/LocalizationSlice/LocalizationSlice';

import styles from '@src/components/Header/Header.module.css';
import layout from '@src/components/Layout/Layout.module.css';

import EPages from '@src/types/enums/EPages';
import { Localization } from '@src/types/types';

import { APP_TITLE } from '@src/constants/global';

import Toggler from '@src/UI/Toggler/Toggler';
import localizationStrings from '@src/constants/localizationStrings';

import { auth, logout } from '@src/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Header: FC = (): JSX.Element => {
  const navigate = useNavigate();

  // for sticky header
  const [isScrolled, setIsScrolled] = useState(false);

  const dispatch = useAppDispatch();

  const [user] = useAuthState(auth);
  const lang: Localization = useSelector(selectLocalization);

  const unauthorizeBTNClick = () => {
    logout();
    navigate('/login');
  };

  // for sticky header
  useEffect((): void => {
    window.addEventListener('scroll', (): void => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scroll : ''}`}>
      <div className={`${layout.wrapper} ${styles.wrapper}`}>
        <h1 className={styles.title}>{APP_TITLE}</h1>

        <nav className={styles.navigation}>
          <NavLink to={EPages.WELCOME}>
            {localizationStrings[lang].welcome}
          </NavLink>
          {user && (
            <NavLink to={EPages.MAIN}>{localizationStrings[lang].main}</NavLink>
          )}
        </nav>

        {user ? (
          <button type="button" onClick={unauthorizeBTNClick}>
            {localizationStrings[lang].signOutBtn}
          </button>
        ) : (
          <div className={styles.buttons}>
            <button type="button" onClick={(): void => navigate(EPages.LOGIN)}>
              {localizationStrings[lang].loginBtn}
            </button>
            <button
              type="button"
              onClick={(): void => navigate(EPages.REGISTER)}
            >
              {localizationStrings[lang].registerBtn}
            </button>
          </div>
        )}

        <Toggler
          on="ru"
          off="en"
          callback={(value: string): void => {
            dispatch(changeLanguage(value as Localization));
          }}
        />
      </div>
    </header>
  );
};

export default Header;
