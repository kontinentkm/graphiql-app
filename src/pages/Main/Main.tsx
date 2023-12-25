import { FC, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';

import styles from '@src/pages/Main/Main.module.css';

import localizationStrings, {
  toastMessages,
} from '@src/constants/localizationStrings';

import { Localization } from '@src/types/types';

import Edit from '@src/components/Edit/Edit';
import Variables from '@src/components/Variables/Variables';

import { selectLocalization } from '@src/store/LocalizationSlice/LocalizationSlice';
import getData from '@src/services/ApiDataService';
import toastFuncWrapper from '@src/utils/ToastFuncWrapper';

import defaultAPIsUrl from '@src/constants/defaultAPIsURL';
import getSchema from '@src/services/ApiSchemaService';

const Main: FC = (): JSX.Element => {
  const lang: Localization = useSelector(selectLocalization);

  const [query, setQuery] = useState('');
  const [variables, setVariables] = useState('');
  const [headers, setHeaders] = useState('');
  const [results, setResults] = useState('');
  const sourceRef = useRef<HTMLInputElement | null>(null);
  const source = useRef('');

  const onPrettifyClick = (): void => console.log('prettify');
  const onGetResultsClick = async (): Promise<void> => {
    const data: string | null = await toastFuncWrapper(
      getData,
      toastMessages[lang].loading_msg,
      toastMessages[lang].get_data_success,
      lang,
      source.current,
      query,
      variables,
      headers
    );

    if (!data) {
      setResults('');
      return;
    }
    setResults(data);
  };

  const onSourceChanging = async (): Promise<void> => {
    const newSource = sourceRef.current?.value || '';
    if (newSource === source.current) return;

    source.current = newSource;
    const data = await toastFuncWrapper(
      getSchema,
      toastMessages[lang].loading_msg,
      toastMessages[lang].schema_load_success_msg,
      lang,
      source.current
    );
    console.log(data);
  };

  const onSourceBlur = (): void => {
    onSourceChanging();
  };

  const onSourceKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key !== 'Enter') return;
    onSourceChanging();
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
              onBlur={onSourceBlur}
              onKeyUp={onSourceKeyUp}
              ref={sourceRef}
            />
            <datalist id="suggestions">
              {defaultAPIsUrl.map(
                (value: string, index: number): JSX.Element => (
                  <option value={value} key={index} />
                )
              )}
            </datalist>
            <div className={styles.search_btn}>
              <FaSearch />
            </div>
          </div>
        </div>

        <Edit
          queryValue={query}
          resultsValue={results}
          onQueryChange={setQuery}
          onResultChange={setResults}
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
