import type { RootState } from '@app/store';
import { createSlice } from '@reduxjs/toolkit';

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
      const currentstep = action.payload;
      state.currentStep = currentstep;
    },
    logOut: (state) => {
      state.token = null;
    },
  },
});

export const { setCredentials, logOut, setCurrentStep } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentStep = (state: RootState) => state.auth.currentStep;
