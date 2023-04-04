import { configureStore } from '@reduxjs/toolkit';
import exampleSlice from './slices/ExampleSlice';
import { registrationForm2Api } from './slices/RegistrationForm2Slice';

export const store = configureStore({
  reducer: {
    [registrationForm2Api.reducerPath]: registrationForm2Api.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
