import { combineReducers, configureStore } from '@reduxjs/toolkit';

import EReducers from '@src/types/enums/EReducers';

import AuthorizationSlice from '@src/store/AuthorizationSlice/AuthorizationSlice';
import LocalizationSlice from '@src/store/LocalizationSlice/LocalizationSlice';

const rootReducer = combineReducers({
  [EReducers.AUTHORIZATION]: AuthorizationSlice,
  [EReducers.LOCALIZATION]: LocalizationSlice,
  // reducers for fetching data for example fetch or axios etc.
  // [newsAPI.reducerPath]: newsAPI.reducer,
});

export const setupStore = (preloadedState?: RootState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    //   middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(newsAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const store: AppStore = setupStore();
