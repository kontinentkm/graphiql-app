import { FC, Suspense, lazy } from 'react';

import '@src/components/SchemaWindow/SchemaWindow.css';

import ISchemaWindowProps from '@src/types/interfaces/ISchemaWindowProps';

import LoaderSpinner from '@src/UI/LoadingSpinner/LoadingSpinner';

import { SCHEMA_WINDOW_TEST_ID } from '@src/__tests__/__mocks__/testIDs';

const SchemaView = lazy(() => import('@src/components/SchemaView/SchemaView'));

const SchemaWindow: FC<ISchemaWindowProps> = ({
  schema,
  visible,
  onCloseClick,
}): JSX.Element => {
  const schemaClasses = `schema_wrapper ${visible ? 'visible' : ''}`;

  return (
    <article data-testid={SCHEMA_WINDOW_TEST_ID} className={schemaClasses}>
      <div className={'button_wrapper'}>
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
