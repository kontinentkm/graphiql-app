import { FC, MouseEventHandler } from 'react';
import { GraphQLSchema } from 'graphql';

const SchemaView: FC<{
  schema: GraphQLSchema | null;
  onItemClick: MouseEventHandler;
}> = ({ schema }): JSX.Element => {
  return (
    <div>{schema ? JSON.stringify(schema) : 'There is no schema yet'}</div>
  );
};

export default SchemaView;
