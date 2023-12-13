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
    </div>
  );
};

export default Welcome;
