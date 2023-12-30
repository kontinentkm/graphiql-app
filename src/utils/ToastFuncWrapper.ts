import { toastSettings } from '@src/constants/toastSettings';
import { LocalizedError } from '@src/types/errorsClasses';
import { Localization } from '@src/types/types';
import { Id, toast } from 'react-toastify';

const toastFuncWrapper = async <T extends CallableFunction>(
  func: T,
  loadingMsg: string,
  successMsg: string,
  lang: Localization,
  ...args: typeof func.arguments
): Promise<ReturnType<T> | null> => {
  const toastID: Id = toast.loading(loadingMsg, toastSettings);

  try {
    const data = await func(...args);

    toast.update(toastID, {
      render: successMsg + '👌',
      type: toast.TYPE.SUCCESS,
      isLoading: false,
      ...toastSettings,
    });

    return data;
  } catch (err) {
    let message: string;

    if (err instanceof LocalizedError) {
      message = err.localizedMessages[lang];
    } else if (err instanceof Error) {
      message = err.message;
    } else {
      message = 'Unknown error';
    }

    toast.update(toastID, {
      render: message + '🤯',
      type: toast.TYPE.ERROR,
      isLoading: false,
      ...toastSettings,
    });

    return null;
  }
};

export default toastFuncWrapper;
