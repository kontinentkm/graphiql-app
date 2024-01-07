import { combineReducers, configureStore } from '@reduxjs/toolkit';

import EReducers from '@src/types/enums/EReducers';

import LocalizationSlice from '@src/store/LocalizationSlice/LocalizationSlice';

const rootReducer = combineReducers({
  [EReducers.LOCALIZATION]: LocalizationSlice,
});

export const setupStore = (preloadedState?: RootState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const store: AppStore = setupStore();
