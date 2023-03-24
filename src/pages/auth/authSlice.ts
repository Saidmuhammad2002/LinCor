import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    currentStep: 1,
  },
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      state.token = accessToken;
    },
    setCurrentStep: (state, action) => {
      const { currentstep } = action.payload;
      state.currentStep = currentstep;
    },
    logOut: (state) => {
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.auth.token;
