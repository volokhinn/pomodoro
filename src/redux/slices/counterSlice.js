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
      localStorage.setItem('tomato', JSON.stringify(state.tomato));
      localStorage.setItem('gold', JSON.stringify(state.gold));
      localStorage.setItem('diamond', JSON.stringify(state.diamond));
      localStorage.setItem('platinum', JSON.stringify(state.platinum));
    },
    fetchCounter(state) {
      state.tomato = JSON.parse(localStorage.getItem('tomato') ?? 0);
      state.gold = JSON.parse(localStorage.getItem('gold') ?? 0);
      state.diamond = JSON.parse(localStorage.getItem('diamond') ?? 0);
      state.platinum = JSON.parse(localStorage.getItem('platinum') ?? 0);
    },
  },
});

export const selectCounterData = (state) => state.counterSlice;

export const { setCounter, fetchCounter } = counterSlice.actions;

export default counterSlice.reducer;
