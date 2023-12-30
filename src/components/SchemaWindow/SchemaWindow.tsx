import { FC, Suspense, lazy } from 'react';

import styles from './SchemaWindow.module.css';

import ISchemaWindowProps from '@src/types/interfaces/ISchemaWindowProps';

import LoaderSpinner from '@src/UI/LoadingSpinner/LoadingSpinner';

const SchemaView = lazy(() => import('@src/components/SchemaView/SchemaView'));

const SchemaWindow: FC<ISchemaWindowProps> = ({
  schema,
  visible,
  onCloseClick,
}): JSX.Element => {
  const schemaClasses = `${styles.wrapper} ${visible ? styles.visible : ''}`;

  return (
    <article className={schemaClasses}>
      <div className={styles.button_wrapper}>
        <button onClick={onCloseClick}>X</button>
      </div>
      {visible && (
        <Suspense fallback={<LoaderSpinner />}>
          <SchemaView schema={schema} />
        </Suspense>
      )}
    </article>
  );
};

export default SchemaWindow;
