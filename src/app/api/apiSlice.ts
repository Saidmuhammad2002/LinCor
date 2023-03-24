const BASE_URL = 'https://api.lincor.uz/api/v1';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '../store';
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  // credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ['Course'],
  endpoints: (builder) => ({}),
});
