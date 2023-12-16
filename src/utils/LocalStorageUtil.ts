import EStorageItems from '@src/types/enums/EStorageItems';
import IStorageItems from '@src/types/interfaces/IStorageItems';

const DEFAULT_ITEMS: IStorageItems = {
  [EStorageItems.LANGUAGE]: 'en',
};

const loadState = (): IStorageItems => {
  const state: IStorageItems = DEFAULT_ITEMS;

  Object.keys(DEFAULT_ITEMS).forEach((key: string): void => {
    const value: string | null = localStorage.getItem(key);
    if (value) {
      state[key] = value;
    }
  });

  return state;
};

const storageItems: IStorageItems = loadState();

const setRecord = (key: keyof IStorageItems, value: string): void => {
  localStorage.setItem(key as string, value);
};

export { storageItems, setRecord, loadState };
