import { FC, useState } from 'react';
import styles from '@src/pages/Main/Main.module.css';
import localizationStrings from '@src/constants/localizationStrings';
import { selectLocalization } from '@src/store/LocalizationSlice/LocalizationSlice';
import { Localization } from '@src/types/types';
import { useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import Edit from '@src/components/Edit/Edit';
import Variables from '@src/components/Variables/Variables';
import CustomButton from '@src/UI/CustomButton/CustomButton';
import { prettifyCode } from '@src/utils/prettifyCode';

const Main: FC = (): JSX.Element => {
  const lang: Localization = useSelector(selectLocalization);
  const [queryValue, setQueryValue] = useState<string>('');

  const handlePrettify = () => {
    const prettifiedQuery = prettifyCode(queryValue);
    setQueryValue(prettifiedQuery);
  };

  return (
    <div>
      <div className={styles.main_container}>
        <p>{localizationStrings[lang].main}</p>
        <div className={styles.top_block}>
          <CustomButton
            onClick={handlePrettify}
            type="button"
            label={localizationStrings[lang].prettify_btn}
          />
          <button className={styles.results_btn}>
            {localizationStrings[lang].results_btn}
          </button>
          <div className={styles.input_block}>
            <input
              className={styles.input}
              type="text"
              placeholder={localizationStrings[lang].input}
              list="suggestions"
            />
            <datalist id="suggestions">
              <option value="https://graphql-pokeapi.graphcdn.app/" />
              <option value="https://rickandmortyapi.com/graphql" />
              <option value="https://spacex-production.up.railway.app/" />
              <option value="https://swapi-graphql.netlify.app/.netlify/functions/index" />
              <option value="https://countries.trevorblades.com/graphql" />
            </datalist>
            <div className={styles.search_btn}>
              <FaSearch />
            </div>
          </div>
        </div>

        <Edit
          onQueryChange={(newQuery: string) => setQueryValue(newQuery)}
          code={queryValue}
        />
        <Variables />
      </div>
    </div>
  );
};

export default Main;
