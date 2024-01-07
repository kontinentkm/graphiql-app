import { FC } from 'react';

import styles from '@src/components/Footer/Footer.module.css';
import layout from '@src/components/Layout/Layout.module.css';

import githubImg from '@src/assets/footer/github.svg';
import rssImg from '@src/assets/footer/rss.svg';

const COURSE_LINK = 'https://rs.school/react/';
const LEV_GITHUB_LINK = 'https://github.com/hotimpulse';
const LEANID_GITHUB_LINK = 'https://github.com/leanidrymkevich';
const MAXIM_GITHUB_LINK = 'https://github.com/kontinentkm';
const RSS_IMG_ALT = 'rss-logo';
const GITHUB_IMG_ALT = 'github-logo';

const Footer: FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={`${layout.wrapper} ${styles.wrapper}`}>
        <a href={COURSE_LINK} target="_blank" rel="noreferrer">
          <img className={styles.rss} src={rssImg} alt={RSS_IMG_ALT} />
        </a>
        <p className={styles.year}>2024</p>
        <div className={styles.githubs}>
          <a href={LEV_GITHUB_LINK} target="_blank" rel="noreferrer">
            <img
              className={styles.github}
              src={githubImg}
              alt={GITHUB_IMG_ALT}
            />
          </a>
          <a href={LEANID_GITHUB_LINK} target="_blank" rel="noreferrer">
            <img
              className={styles.github}
              src={githubImg}
              alt={GITHUB_IMG_ALT}
            />
          </a>
          <a href={MAXIM_GITHUB_LINK} target="_blank" rel="noreferrer">
            <img
              className={styles.github}
              src={githubImg}
              alt={GITHUB_IMG_ALT}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
