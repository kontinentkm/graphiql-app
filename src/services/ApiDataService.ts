import toastSettings from '@src/constants/toastSettings';
import axios from 'axios';

import { Id, toast } from 'react-toastify';

const LOADING_DATA_MESSAGE = 'Loading...';
const SUCCESS_MESSAGE = 'Successfull data fetching 👌';
const VARIABLES_PARSING_ERROR_MSG =
  'SyntaxError while variables parsing! Variables object must be valid JSON!';
const HEADERS_PARSING_ERROR_MSG =
  'SyntaxError while headers parsing! Headers object must be valid JSON!';

const UNKNOWN_ERROR_MSG = 'Unknown error';

const getData = async (
  source: string,
  query: string,
  variables: string,
  headers: string
): Promise<string> => {
  let variablesObj: Record<string, string>;
  let headersObj: Record<string, string>;

  const toastID: Id = toast.loading(LOADING_DATA_MESSAGE, toastSettings);

  try {
    try {
      variablesObj = variables ? JSON.parse(variables) : {};
    } catch (err) {
      throw new Error(VARIABLES_PARSING_ERROR_MSG);
    }

    try {
      headersObj = headers ? JSON.parse(headers) : {};
    } catch (err) {
      throw new Error(HEADERS_PARSING_ERROR_MSG);
    }

    const body: Record<string, string | Record<string, string>> = {
      query,
      variables: variablesObj,
    };
    const config = { headers: headersObj };

    const response = await axios.post(source, body, config);
    const data = await response.data;

    toast.update(toastID, {
      render: SUCCESS_MESSAGE,
      type: toast.TYPE.SUCCESS,
      isLoading: false,
      ...toastSettings,
    });

    return JSON.stringify(data, undefined, 2);
  } catch (err) {
    const msg: string = err instanceof Error ? err.message : UNKNOWN_ERROR_MSG;

    toast.update(toastID, {
      render: msg + '🤯',
      type: toast.TYPE.ERROR,
      isLoading: false,
      ...toastSettings,
    });
    return '';
  }
};

export default getData;
