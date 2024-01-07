import { FC } from 'react';

import '@src/components/SchemaWindow/SchemaWindow.css';

import ISchemaWindowProps from '@src/types/interfaces/ISchemaWindowProps';

import SchemaView from '@src/components/SchemaView/SchemaView';

import { SCHEMA_WINDOW_TEST_ID } from '@src/__tests__/__mocks__/testIDs';

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
      <SchemaView schema={schema} />
    </article>
  );
};

export default SchemaWindow;
