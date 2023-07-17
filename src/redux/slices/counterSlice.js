import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tomato: 0,
    gold: 0,
    diamond: 0,
    platinum: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCounter(state, action) {

    }
  },
});

export const selectTimerData = (state) => state.counterSlice;

export const { changeSettings, fetchTimer, setTimer } = counterSlice.actions;

export default counterSlice.reducer;
