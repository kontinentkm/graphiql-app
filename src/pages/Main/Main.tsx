import { FC, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { GraphQLSchema } from 'graphql';

import styles from '@src/pages/Main/Main.module.css';

import localizationStrings, {
  toastMessages,
} from '@src/constants/localizationStrings';

import { Localization } from '@src/types/types';

import Edit from '@src/components/Edit/Edit';
import Variables from '@src/components/Variables/Variables';
import { prettifyCode } from '@src/utils/prettifyCode';
import SchemaWindow from '@src/components/SchemaWindow/SchemaWindow';

import { selectLocalization } from '@src/store/LocalizationSlice/LocalizationSlice';
import getData from '@src/services/ApiDataService';
import toastFuncWrapper from '@src/utils/ToastFuncWrapper';

import defaultAPIsUrl from '@src/constants/defaultAPIsURL';
import getSchema from '@src/services/ApiSchemaService';
import { toast } from 'react-toastify';

const Main: FC = (): JSX.Element => {
  const lang: Localization = useSelector(selectLocalization);

  const [query, setQuery] = useState<string>('');
  const [variables, setVariables] = useState<string>('');
  const [headers, setHeaders] = useState<string>('');
  const [results, setResults] = useState<string>('');
  const [schemaVisibility, setSchemaVisibility] = useState<boolean>(false);
  const [schema, setSchema] = useState<GraphQLSchema | null>(null);

  const sourceRef = useRef<HTMLInputElement | null>(null);
  const source = useRef<string>('');

  const onPrettifyClick = (): void => {
    const prettifiedQuery = prettifyCode(query);
    setQuery(prettifiedQuery);
  };

  const onGetResultsClick = async (): Promise<void> => {
    if (!source.current) {
      toast.warning(toastMessages[lang].empty_source_err_msg);
      return;
    }

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

    if (!newSource) {
      toast.warning(toastMessages[lang].empty_source_err_msg);
      setSchema(null);
      source.current = newSource;
      return;
    }

    source.current = newSource;
    const data: GraphQLSchema | null = await toastFuncWrapper(
      getSchema,
      toastMessages[lang].loading_msg,
      toastMessages[lang].schema_load_success_msg,
      lang,
      source.current
    );
    setSchema(data);
  };

  const onSourceBlur = (): void => {
    onSourceChanging();
  };

  const onSourceKeyUp = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key !== 'Enter') return;
    onSourceChanging();
  };

  const onSchemaBtnClick = (): void => {
    setSchemaVisibility(!schemaVisibility);
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.top_block}>
        <button className={styles.results_btn} onClick={onPrettifyClick}>
          {localizationStrings[lang].prettify_btn}
        </button>
        <button className={styles.results_btn} onClick={onGetResultsClick}>
          {localizationStrings[lang].results_btn}
        </button>
        <button className={styles.results_btn} onClick={onSchemaBtnClick}>
          {localizationStrings[lang].schema_btn}
        </button>
        <div className={styles.input_block}>
          <input
            className={styles.input}
            type="text"
            placeholder={localizationStrings[lang].input}
            data-testid="suggestions"
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
            <FaSearch onClick={onSourceBlur} />
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
      <SchemaWindow
        schema={schema}
        visible={schemaVisibility}
        onCloseClick={onSchemaBtnClick}
      />
    </div>
  );
};

export default Main;
