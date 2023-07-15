import { createSlice } from '@reduxjs/toolkit';
import tomato from '../../assets/svg/tomato.svg';
import alarm1 from '../../assets/audio/alarm1.mp3';

const initialState = {
  background: tomato,
  sound: alarm1,
  time: 1500,
  break: 300,
  defaultTime: 1500,
  defaultBreakTime: 300,
  stateTimer: 'unActive',
};

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    changeSettings(state, action) {
      state.background = action.payload.background;
      state.sound = action.payload.sound;
      state.defaultTime = action.payload.times.time;
      state.time = state.defaultTime;
      state.defaultBreakTime = action.payload.times.break;
      state.break = state.defaultBreakTime;

      const timer = {
        background: state.background,
        sound: state.sound,
        defaultTime: state.time,
        defaultBreakTime: state.break,
      };

      localStorage.setItem('timer', JSON.stringify(timer));
    },

    fetchTimer(state) {
      const timer = JSON.parse(localStorage.getItem('timer') ?? '[]');
      if (!timer.length) return;

      state.background = timer.background;
      state.sound = timer.sound;
      state.defaultTime = timer.defaultTime;
      state.time = state.defaultTime;
      state.defaultBreakTime = timer.defaultBreakTime;
      state.break = state.defaultBreakTime;
    },
  },
});

export const selectTimerData = (state) => state.timerSlice;

export const { changeSettings, fetchTimer } = timerSlice.actions;

export default timerSlice.reducer;
