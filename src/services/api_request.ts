import { APIError, EditorError } from './errors_classes';
import { toast } from 'react-toastify';

const errorHandler = (err: Error): string => {
  if (err instanceof EditorError) {
    return `SyntaxError in ${err.editorName} Editor! \n${err.editorName} must be a valid JSON object!`;
  } else if (err instanceof APIError) {
    return `Data Fetching Error!\n${JSON.stringify(err.data, undefined, 2)}`;
  }
  return `Data Fetching Error!\n${err}`;
};

const getApiResponse = async (
  source: string,
  query: string,
  variables: string,
  headers: string
): Promise<string> => {
  let variablesObj;
  let headersObj;

  try {
    try {
      variablesObj = variables ? JSON.parse(variables) : {};
    } catch (err) {
      throw new EditorError('Variables');
    }

    try {
      headersObj = headers ? JSON.parse(headers) : {};
    } catch (err) {
      throw new EditorError('Headers');
    }

    const response = await fetch(source, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headersObj,
      },
      body: JSON.stringify({
        query,
        variables: variablesObj,
      }),
    });

    const data = await response.json();

    if (!response.ok) throw new APIError(data);
    toast.success('All right');
    return JSON.stringify(data, undefined, 2);
  } catch (err) {
    let errString;
    if (err instanceof Error) {
      errString = errorHandler(err);
    } else {
      errString = `${err}`;
    }
    toast.error(errString);
    return errString;
  }
};

export { getApiResponse };
