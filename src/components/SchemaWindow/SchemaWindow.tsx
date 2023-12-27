import { FC, MouseEventHandler } from 'react';
import { GraphQLSchema } from 'graphql';

import styles from './SchemaWindow.module.css';

const SchemaWindow: FC<{
  schema: GraphQLSchema | null;
  visible: boolean;
  onCloseClick: MouseEventHandler;
}> = ({ schema, visible, onCloseClick }): JSX.Element => {
  const schemaClasses = `${styles.wrapper} ${visible ? styles.visible : ''}`;

  return (
    <article className={schemaClasses}>
      <button onClick={onCloseClick}>X</button>
      <div className={styles.content}>
        {schema ? JSON.stringify(schema, undefined, 4) : ''}
      </div>
    </article>
  );
};

export default SchemaWindow;
