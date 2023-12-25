import { toastMessages } from '@src/constants/localizationStrings';
import { LocalizedError } from '@src/types/errorsClasses';
import axios from 'axios';

const query = `query IntrospectionQuery {
  __schema {
    queryType { name }
    mutationType { name }
    subscriptionType { name }
    types {
      ...FullType
    }
    directives {
      name
      locations
      args {
        ...InputValue
      }
    }
  }
}

fragment FullType on __Type {
  kind
  name
  fields(includeDeprecated: true) {
    name
    args {
      ...InputValue
    }
    type {
      ...TypeRef
    }
    isDeprecated
    deprecationReason
  }
  inputFields {
    ...InputValue
  }
  interfaces {
    ...TypeRef
  }
  enumValues(includeDeprecated: true) {
    name
    isDeprecated
    deprecationReason
  }
  possibleTypes {
    ...TypeRef
  }
}

fragment InputValue on __InputValue {
  name
  type { ...TypeRef }
  defaultValue
}

fragment TypeRef on __Type {
  kind
  name
  ofType {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
              }
            }
          }
        }
      }
    }
  }
}
`;

const getSchema = async (source: string) => {
  const body: Record<string, string | Record<string, string>> = {
    query,
  };

  try {
    const response = await axios.post(source, body);
    const data = await response.data;

    return JSON.stringify(data, undefined, 2);
  } catch (err) {
    throw new LocalizedError({
      en: toastMessages.en.schema_load_err_msg,
      ru: toastMessages.ru.schema_load_err_msg,
    });
  }
};

export default getSchema;
