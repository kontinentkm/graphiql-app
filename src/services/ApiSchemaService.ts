import { toastMessages } from '@src/constants/localizationStrings';
import { LocalizedError } from '@src/types/errorsClasses';
import axios, { AxiosResponse } from 'axios';
import {
  GraphQLSchema,
  IntrospectionQuery,
  buildClientSchema,
  getIntrospectionQuery,
} from 'graphql';

const getSchema = async (source: string): Promise<GraphQLSchema> => {
  const body: Record<string, string | Record<string, string>> = {
    query: getIntrospectionQuery(),
  };

  const config: Record<string, string | Record<string, string>> = {
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    const response: AxiosResponse = await axios.post(source, body, config);
    const json: IntrospectionQuery = response.data.data;
    const graphqlSchemaObj: GraphQLSchema = buildClientSchema(json);

    return graphqlSchemaObj;
  } catch (err) {
    throw new LocalizedError({
      en: toastMessages.en.schema_load_err_msg,
      ru: toastMessages.ru.schema_load_err_msg,
    });
  }
};

export default getSchema;
