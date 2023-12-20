import EditorsPane from '@src/components/EditorsPane/EditorsPane';
import PreviewPane from '@src/components/PerviewPane/PreviewPane';
import { FC, useState } from 'react';
import styles from '@src/pages/Main/Main.module.css';
import localizationStrings from '@src/constants/localizationStrings';
import { selectLocalization } from '@src/store/LocalizationSlice/LocalizationSlice';
import { Localization } from '@src/types/types';
import { useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { FaPlayCircle } from 'react-icons/fa';

const Main: FC = (): JSX.Element => {
  const lang: Localization = useSelector(selectLocalization);

  const [Query, setQuery] = useState<string>('');
  const [Variables, setVariables] = useState<string>('');
  const [Headers, setHeaders] = useState<string>('');

  return (
    <div>
      <div className={styles.main_container}>
        <p>{localizationStrings[lang].main}</p>
        <div className={styles.top_block}>
          <button className={styles.prettify_btn}>
            {localizationStrings[lang].prettify_btn}
          </button>
          <div className={styles.input_block}>
            <input
              className={styles.input}
              type="text"
              placeholder={localizationStrings[lang].input}
            />
            <div className={styles.search_btn}>
              <FaSearch />
            </div>
          </div>
        </div>

        <div className={styles.execute_btn_container}>
          <div className={styles.execute_btn}>
            <FaPlayCircle />
          </div>
        </div>

        <div className={styles.editor_container}>
          <EditorsPane
            Query={Query}
            Variables={Variables}
            Headers={Headers}
            setQuery={setQuery}
            setVariables={setVariables}
            setHeaders={setHeaders}
          />
          <PreviewPane Query={Query} Variables={Variables} Headers={Headers} />
        </div>
      </div>
    </div>
  );
};

export default Main;
