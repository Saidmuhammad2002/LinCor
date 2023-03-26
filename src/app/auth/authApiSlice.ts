import { apiSlice } from '@app/api/apiSlice';
import { simpleResponse } from '../types';
import { setCredentials } from './authSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (credentials) => ({
        url: '/users/registr',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
    validateEmail: builder.mutation<simpleResponse, string>({
      query: (id) => ({
        url: `/users/registr/email/${id}`,
        method: 'GET',
      }),
    }),
    creatProfile: builder.mutation({
      query: (credentials) => ({
        url: '/users/registr/create',
        method: 'POST',
        body: { ...credentials },
        responseHandler: (response) => response.text(), //backend send text format
      }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setCredentials(data));
      },
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: '/users/login',
        method: 'POST',
        body: { ...credentials },
        responseHandler: (response) => response.text(), //bckend send text format
      }),
    }),
    verifyEmail: builder.mutation<simpleResponse, string>({
      query: (id) => ({
        url: `/users/login/email/${id}`,
        method: 'GET',
        responseHandler: (response) => response.text(),
      }),

      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data) dispatch(setCredentials({ accessToken: data }));
      },
    }),

    resetPasswordVerification: builder.mutation({
      query: (crendentials) => ({
        url: `/users/parol`,
        method: 'POST',
        body: { ...crendentials },
        responseHandler: (response) => response.text(),
      }),
    }),
    resetPassword: builder.mutation({
      query: (crendentials) => ({
        url: `/users/parol/email/${crendentials.key}`,
        method: 'POST',
        body: { ...crendentials },
        responseHandler: (response) => response.text(), //backend send text format
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useValidateEmailMutation,
  useCreatProfileMutation,
  useVerifyEmailMutation,
  useResetPasswordVerificationMutation,
  useResetPasswordMutation,
} = authApiSlice;

// type EndpointKey = keyof typeof authApiSlice.endpoints;

// export function dispatchEndpointAuth<T>(
//   endpointKey: EndpointKey,
//   data: T
// ): void {
//   console.log(data);
//   const endpointFunction = authApiSlice.endpoints[endpointKey].initiate;
//   if (!endpointFunction) {
//     console.error('Invalid endpoint key');
//     return;
//   }
//   store.dispatch(endpointFunction(data));
// }
