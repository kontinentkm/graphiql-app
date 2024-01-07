import EStorageItems from '@src/types/enums/EStorageItems';
import { Localization } from '@src/types/types';

interface IStorageItems {
  [key: string]: string;
  [EStorageItems.LANGUAGE]: Localization;
}

export default IStorageItems;
