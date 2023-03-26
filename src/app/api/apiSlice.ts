const BASE_URL = 'https://api.lincor.uz/api/v1';

import type { RootState } from '@app/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  keepUnusedDataFor: 10000000,
  baseQuery: baseQuery,
  tagTypes: ['Course', 'Auth'],
  endpoints: (builder) => ({}),
});
