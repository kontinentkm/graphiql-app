import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@src/store/store';

import EReducers from '@src/types/enums/EReducers';
import ILocalizationState from '@src/types/interfaces/ILocalizationState';
import { Localization } from '@src/types/types';
import { storageItems } from '@src/utils/LocalStorageUtil';

const initialState: ILocalizationState = {
  language: storageItems.lang,
};

export const LocalizationSlice = createSlice({
  name: EReducers.LOCALIZATION,
  initialState,
  reducers: {
    changeLanguage(state, { payload }: PayloadAction<Localization>) {
      state.language = payload;
    },
  },
});

export const { changeLanguage } = LocalizationSlice.actions;

export const selectLocalization = (state: RootState): Localization =>
  state[EReducers.LOCALIZATION].language;

export default LocalizationSlice.reducer;
