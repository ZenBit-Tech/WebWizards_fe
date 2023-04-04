import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DoctorSubmitValue } from 'components/RegistrationForm2/types';

export const registrationForm2Api = createApi({
  reducerPath: 'registrationForm2Api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_SERVER,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('access_token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    registerDoctor: builder.mutation<DoctorSubmitValue, DoctorSubmitValue>({
      query(payload) {
        return {
          url: '/doctor',
          method: 'PATCH',
          body: payload
        };
      }
    }),
  })
});

export const {useRegisterDoctorMutation} = registrationForm2Api;

