import { configureStore } from '@reduxjs/toolkit';
import timerSlice from './slices/timerSlice';
import awardsSlice from './slices/awardsSlice';

export const store = configureStore({
  reducer: {
    timerSlice,
    awardsSlice,
  },
});
