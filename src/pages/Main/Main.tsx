import { ChangeEvent, FC, useState } from 'react';

import styles from './styles.module.css';
import { getApiResponse } from '@src/services/api_request';

const Main: FC = (): JSX.Element => {
  const [source, setSource] = useState('https://graphql-pokeapi.graphcdn.app/');
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [variables, setVariables] = useState('');
  const [headers, setHeaders] = useState('');

  const onSourceChange = (event: ChangeEvent<HTMLInputElement>): void =>
    setSource(event.target.value);
  const onQueryChange = (event: ChangeEvent<HTMLTextAreaElement>): void =>
    setQuery(event.target.value);
  const onResponseChange = (event: ChangeEvent<HTMLTextAreaElement>): void =>
    setResponse(event.target.value);
  const onVariablesChange = (event: ChangeEvent<HTMLTextAreaElement>): void =>
    setVariables(event.target.value);
  const onHeadersChange = (event: ChangeEvent<HTMLTextAreaElement>): void =>
    setHeaders(event.target.value);

  const onDoRequestClick = async (): Promise<void> => {
    const response: string = await getApiResponse(
      source,
      query,
      variables,
      headers
    );
    setResponse(response);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.header}>
        <label htmlFor="source">GraphiQL source</label>
        <input
          list="sources"
          name="source"
          id="source"
          value={source}
          onChange={onSourceChange}
        />
        <datalist id="sources">
          <option value="https://graphql-pokeapi.graphcdn.app/"></option>
          <option value="https://rickandmortyapi.com/graphql"></option>
          <option value="https://spacex-production.up.railway.app/"></option>
          <option value="https://swapi-graphql.netlify.app/.netlify/functions/index"></option>
          <option value="https://countries.trevorblades.com/graphql"></option>
        </datalist>
        <button type="button" id="button" onClick={onDoRequestClick}>
          Do request
        </button>
      </form>
      <div className={styles['editors_wrapper']}>
        <div className={styles['editor_wrapper']}>
          <label htmlFor="query">Request</label>
          <textarea
            id="query"
            value={query}
            onChange={onQueryChange}
          ></textarea>
        </div>
        <div className={styles['editor_wrapper']}>
          <label htmlFor="response">Response</label>
          <textarea
            id="response"
            value={response}
            onChange={onResponseChange}
          ></textarea>
        </div>
      </div>
      <div className={styles.additionals}>
        <div className={styles['editor_wrapper']}>
          <label htmlFor="variables">Variables</label>
          <textarea
            id="variables"
            value={variables}
            onChange={onVariablesChange}
          ></textarea>
        </div>
        <div className={styles['editor_wrapper']}>
          <label htmlFor="headers">Headers</label>
          <textarea
            id="headers"
            value={headers}
            onChange={onHeadersChange}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Main;
