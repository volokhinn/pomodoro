import { configureStore } from '@reduxjs/toolkit';
import timerSlice from './slices/timerSlice';
import counterSlice from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    timerSlice,
    counterSlice,
  },
});
