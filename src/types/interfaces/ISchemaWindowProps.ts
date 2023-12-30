import { GraphQLSchema } from 'graphql';
import { MouseEventHandler } from 'react';

interface ISchemaWindowProps {
  schema: GraphQLSchema | null;
  visible: boolean;
  onCloseClick: MouseEventHandler;
}

export default ISchemaWindowProps;
