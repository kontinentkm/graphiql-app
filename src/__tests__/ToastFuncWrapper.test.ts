import { Localization } from '@src/types/types';

import toastFuncWrapper from '@src/utils/ToastFuncWrapper';

const returnValue = 'value';
const loadingMsg = 'loadingMsg';
const successMsg = 'successMsg';
const lang: Localization = 'en';
const mockFunc = jest.fn(() => returnValue);
const mockErrorFunc = jest.fn(() => {
  throw new Error();
});

afterEach(() => mockFunc.mockClear());

test('callback have been called once', async (): Promise<void> => {
  await toastFuncWrapper(mockFunc, loadingMsg, successMsg, lang);
  expect(mockFunc).toHaveBeenCalledTimes(1);
});

test('function returns appropriate value', async (): Promise<void> => {
  const result: string | null = await toastFuncWrapper(
    mockFunc,
    loadingMsg,
    successMsg,
    lang
  );
  expect(result).toBe(returnValue);
});

test('returns null on error', async (): Promise<void> => {
  const result = await toastFuncWrapper(
    mockErrorFunc,
    loadingMsg,
    successMsg,
    lang
  );
  expect(result).toEqual(null);
});
