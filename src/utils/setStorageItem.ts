export const setStorageItem = (key: string, value: string): void =>
  localStorage.setItem(key, JSON.stringify(value));
