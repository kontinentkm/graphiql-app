import { FC, useRef, useState } from 'react';
import styles from '@src/pages/Main/Main.module.css';
import localizationStrings from '@src/constants/localizationStrings';
import { selectLocalization } from '@src/store/LocalizationSlice/LocalizationSlice';
import { Localization } from '@src/types/types';
import { useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import Edit from '@src/components/Edit/Edit';
import Variables from '@src/components/Variables/Variables';

const Main: FC = (): JSX.Element => {
  const lang: Localization = useSelector(selectLocalization);

  const [query, setQuery] = useState('');
  const [variables, setVariables] = useState('');
  const [headers, setHeaders] = useState('');
  const [results, setResults] = useState('');
  const sourceRef = useRef<HTMLInputElement | null>(null);

  const onPrettifyClick = (): void => console.log('prettify');
  const onGetResultsClick = (): void => {
    setResults(query);
  };

  return (
    <div>
      <div className={styles.main_container}>
        <p>{localizationStrings[lang].main}</p>
        <div className={styles.top_block}>
          <button className={styles.prettify_btn} onClick={onPrettifyClick}>
            {localizationStrings[lang].prettify_btn}
          </button>
          <button className={styles.results_btn} onClick={onGetResultsClick}>
            {localizationStrings[lang].results_btn}
          </button>
          <div className={styles.input_block}>
            <input
              className={styles.input}
              type="text"
              placeholder={localizationStrings[lang].input}
              list="suggestions"
              ref={sourceRef}
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
          queryValue={query}
          onQueryChange={setQuery}
          resultsValue={results}
        />
        <Variables
          variablesValue={variables}
          headersValue={headers}
          onVariablesChange={setVariables}
          onHeadersChange={setHeaders}
        />
      </div>
    </div>
  );
};

export default Main;
