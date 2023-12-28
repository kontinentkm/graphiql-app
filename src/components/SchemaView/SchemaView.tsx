import { FC } from 'react';
import { useSelector } from 'react-redux';
import { printSchema } from 'graphql';

import { Localization } from '@src/types/types';

import ISchemaViewProps from '@src/types/interfaces/ISchemaViewProps';
import { selectLocalization } from '@src/store/LocalizationSlice/LocalizationSlice';
import localizationStrings from '@src/constants/localizationStrings';

const SchemaView: FC<ISchemaViewProps> = ({ schema }): JSX.Element => {
  const lang: Localization = useSelector(selectLocalization);

  return (
    <textarea
      disabled
      defaultValue={
        schema ? printSchema(schema) : localizationStrings[lang].no_schema_msg
      }
    ></textarea>
  );
};

export default SchemaView;
