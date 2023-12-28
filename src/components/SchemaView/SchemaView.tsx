import { FC } from 'react';

import ISchemaViewProps from '@src/types/interfaces/ISchemaViewProps';
import { printSchema } from 'graphql';

const SchemaView: FC<ISchemaViewProps> = ({ schema }): JSX.Element => {
  return (
    <textarea
      disabled
      defaultValue={schema ? printSchema(schema) : 'There is no schema yet'}
    ></textarea>
  );
};

export default SchemaView;
