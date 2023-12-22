import { APIError, EditorError } from './errors_classes';

const errorHandler = (err: Error): string => {
  if (err instanceof EditorError) {
    return `SyntaxError in ${err.editorName} Editor! \n${err.editorName} must be a valid JSON object!`;
  } else if (err instanceof APIError) {
    return `Data Fetching Error!\n${JSON.stringify(err.data, undefined, 2)}`;
  }
  return `Unknown error! \n ${err}`;
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

    return JSON.stringify(data, undefined, 2);
  } catch (err) {
    if (err instanceof Error) return errorHandler(err);
    return `${err}`;
  }
};

export { getApiResponse };
