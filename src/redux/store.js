import { configureStore } from '@reduxjs/toolkit';
import timerSlice from './slices/timerSlice';

export const store = configureStore({
  reducer: {
    timerSlice,
  },
});
