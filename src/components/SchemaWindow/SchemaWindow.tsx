import {
  FC,
  MouseEventHandler,
  Suspense,
  lazy,
  useEffect,
  useState,
} from 'react';
import { GraphQLSchema } from 'graphql';

import styles from './SchemaWindow.module.css';

import LoaderSpinner from '@src/UI/LoadingSpinner/LoadingSpinner';

const SchemaView = lazy(() => import('@src/components/SchemaView/SchemaView'));

const SchemaWindow: FC<{
  schema: GraphQLSchema | null;
  visible: boolean;
  onCloseClick: MouseEventHandler;
}> = ({ schema, visible, onCloseClick }): JSX.Element => {
  const schemaClasses = `${styles.wrapper} ${visible ? styles.visible : ''}`;
  const firstHistoryItem = schema ? JSON.stringify(schema) : '';

  const [history, setHistory] = useState([firstHistoryItem]);

  const onLiClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLLIElement;
    const value = target.textContent || '';
    setHistory(history.concat(value));
  };

  const onBackClick = (): void => {
    setHistory(history.slice(0, -1));
  };

  const onRootClick = (): void => {
    setHistory([]);
  };

  useEffect((): void => {
    setHistory([]);
  }, [schema]);

  return (
    <article className={schemaClasses}>
      <div>
        <button disabled={!history.length} onClick={onBackClick}>
          Back
        </button>
        <button disabled={!history.length} onClick={onRootClick}>
          Root
        </button>
        <button onClick={onCloseClick}>X</button>
      </div>
      <br />
      {visible && (
        <Suspense fallback={<LoaderSpinner />}>
          <h2>Preview</h2>
          <SchemaView schema={schema} onItemClick={onLiClick} />
        </Suspense>
      )}
    </article>
  );
};

export default SchemaWindow;
