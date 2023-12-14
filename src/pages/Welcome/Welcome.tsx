import { FC } from 'react';
import styles from '@src/pages/Welcome/Welcome.module.css';
import localizationStrings from '@src/constants/localizationStrings';
import { selectLocalization } from '@src/store/LocalizationSlice/LocalizationSlice';
import { Localization } from '@src/types/types';
import { useSelector } from 'react-redux';

const Welcome: FC = (): JSX.Element => {
  const lang: Localization = useSelector(selectLocalization);

  return (
    <div className={styles.welcome_container}>
      <p>{localizationStrings[lang].welcome}</p>
      <h2 className={styles.team_title}>{localizationStrings[lang].ourTeam}</h2>
      <div className={styles.team_block}>
        {localizationStrings[lang].developers.map((developer) => (
          <div key={developer.id} className={styles.developer_block}>
            <div className={styles.developer}>
              <img
                className={styles.photo}
                src={developer.photo}
                alt={developer.name}
              />
              <p className={styles.name}>{developer.name}</p>
              <p className={styles.position}>{developer.position}</p>
              <p className={styles.github}>
                <a
                  href={developer.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {developer.github}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.project_title}>
        {localizationStrings[lang].project_title}
      </div>
      <div className={styles.project_text}>
        {localizationStrings[lang].project_text}
      </div>
      <div className={styles.course_title}>
        {localizationStrings[lang].course_title}
      </div>
      <div className={styles.course_text}>
        {localizationStrings[lang].course_text}
      </div>
    </div>
  );
};

export default Welcome;
