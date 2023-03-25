import { apiSlice } from '@app/api/apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/users/registr',
        method: 'POST',
        body: { ...credentials },
      }),
    }),

    signup: builder.mutation({
      query: (credentials) => ({
        url: '/users/registr',
        method: 'POST',
        body: {
          ...credentials,
        },
      }),
    }),
    signupWithEmailId: builder.mutation({
      query: (credentials) => ({
        url: '/auth/signupWithEmailId',
        method: 'POST',
        body: { ...credentials },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useSignupWithEmailIdMutation,
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
