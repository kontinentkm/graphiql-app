import { toastMessages } from '@src/constants/localizationStrings';
import { LocalizedError } from '@src/types/errorsClasses';
import axios from 'axios';

const getData = async (
  source: string,
  query: string,
  variables: string,
  headers: string
): Promise<string> => {
  let variablesObj: Record<string, string>;
  let headersObj: Record<string, string>;

  try {
    variablesObj = variables ? JSON.parse(variables) : {};
  } catch (err) {
    throw new LocalizedError({
      en: toastMessages.en.variables_editor_error_msg,
      ru: toastMessages.ru.variables_editor_error_msg,
    });
  }

  try {
    headersObj = headers ? JSON.parse(headers) : {};
  } catch (err) {
    throw new LocalizedError({
      en: toastMessages.en.headers_editor_error_msg,
      ru: toastMessages.ru.headers_editor_error_msg,
    });
  }

  const body: Record<string, string | Record<string, string>> = {
    query,
    variables: variablesObj,
  };
  const config = { headers: headersObj };

  try {
    const response = await axios.post(source, body, config);
    const data = await response.data;

    return JSON.stringify(data, undefined, 4);
  } catch (err) {
    throw new LocalizedError({
      en: toastMessages.en.get_data_error,
      ru: toastMessages.ru.get_data_error,
    });
  }
};

export default getData;
