import { configureStore } from '@reduxjs/toolkit';
import userReducer from './UserSlice'; // Adjust the import according to your file structure

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
