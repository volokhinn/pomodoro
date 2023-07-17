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
        state[action.payload]++;
    },
    fetchCounter(state) {

    }
  },
});

export const selectCounterData = (state) => state.counterSlice;

export const { setCounter } = counterSlice.actions;

export default counterSlice.reducer;
