import type { RootState } from '@app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type User = {
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  image: string | null;
  open_course: [];
  take_workbook: [];
  watch_video: [];
};
type AuthState = {
  user: User | null;
  token: string | null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null } as AuthState,

  reducers: {
    setCredentials: (
      state,
      { payload: { token } }: PayloadAction<{ token: string }>
    ) => {
      state.token = token;
    },

    logOut: (state) => {
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
