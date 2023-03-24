import { apiSlice } from '../../app/api/apiSlice';
import { store } from '../../app/store';
import { logOut, setCredentials } from './authSlice';

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

    // sendLogout: builder.mutation({
    //   query: () => ({
    //     url: "/auth/logout",
    //     method: "POST",
    //   }),
    //   async onQueryStarted(arg, { dispatch, queryFulfilled }) {
    //     try {
    //       const { data } = await queryFulfilled;
    //       console.log(data);
    //       dispatch(logOut());
    //       setTimeout(() => {
    //         dispatch(apiSlice.util.resetApiState());
    //       }, 1000);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   },
    // }),
    // refresh: builder.mutation({
    //   query: () => ({
    //     url: "/auth/refresh",
    //     method: "GET",
    //   }),
    //   async onQueryStarted(arg, { dispatch, queryFulfilled }) {
    //     try {
    //       const { data } = await queryFulfilled;
    //       console.log(data);
    //       const { accessToken } = data;
    //       dispatch(setCredentials({ accessToken }));
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   },
    // }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useSignupWithEmailIdMutation,
} = authApiSlice;

type EndpointKey = keyof typeof authApiSlice.endpoints;

export function dispatchEndpointAuth<T>(
  endpointKey: EndpointKey,
  data: T
): void {
  console.log(data);
  const endpointFunction = authApiSlice.endpoints[endpointKey].initiate;
  if (!endpointFunction) {
    console.error('Invalid endpoint key');
    return;
  }
  store.dispatch(endpointFunction(data));
}
