import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@src/store/store';

import EReducers from '@src/types/enums/EReducers';
import IAuthorizationState from '@src/types/interfaces/IAuthorizationState';

const initialState: IAuthorizationState = {
  token: false, // or null if token is an object
};

export const AuthorizationSlice = createSlice({
  name: EReducers.AUTHORIZATION,
  initialState,
  reducers: {
    authorize(state, { payload }: PayloadAction<typeof initialState.token>) {
      state.token = payload;
    },
    unauthorize(state, { payload }: PayloadAction<typeof initialState.token>) {
      state.token = payload; // false or if you use an object -> null
    },
  },
});

export const { authorize, unauthorize } = AuthorizationSlice.actions;

export const selectAuthorization = (state: RootState): boolean =>
  !!state[EReducers.AUTHORIZATION].token;

export default AuthorizationSlice.reducer;
