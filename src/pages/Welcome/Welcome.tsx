import { FC } from 'react';
import styles from '@src/pages/Welcome/Welcome.module.css';
import localizationStrings from '@src/constants/localizationStrings';
import { selectLocalization } from '@src/store/LocalizationSlice/LocalizationSlice';
import { Localization } from '@src/types/types';
import { useSelector } from 'react-redux';

const Welcome: FC = (): JSX.Element => {
  const lang: Localization = useSelector(selectLocalization);

  return (
    <div>
      <p>{localizationStrings[lang].welcome}</p>
      <h2 className={styles.team_title}>{localizationStrings[lang].ourTeam}</h2>
      <div className={styles.team_block}>
        {localizationStrings[lang].developers.map((developer) => (
          <div key={developer.id} className={styles.developer}>
            <img src={developer.photo} alt={developer.name} />
            <h3>{developer.name}</h3>
            <p>{developer.position}</p>
            <a
              href={developer.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {developer.github}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
