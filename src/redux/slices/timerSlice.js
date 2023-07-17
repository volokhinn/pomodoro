import { createSlice } from '@reduxjs/toolkit';
import tomato from '../../assets/svg/tomato.svg';
import alarm1 from '../../assets/audio/alarm1.mp3';

const initialState = {
  background: tomato,
  sound: alarm1,
  defaultTime: 10,
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
      state.defaultBreakTime = action.payload.times.break;

      const timer = {
        background: state.background,
        sound: state.sound,
        defaultTime: state.time,
        defaultBreakTime: state.break,
      };

      localStorage.setItem('timer', JSON.stringify(timer));
    },

    setTimer(state, action) {
      if (state.stateTimer === 'active') {
        state.stateTimer = action.payload ? 'break' : 'unActive';
        return;
      }
      state.stateTimer = 'active';
    },

    fetchTimer(state) {
      const timer = JSON.parse(localStorage.getItem('timer') ?? '[]');
      if (!timer.length) return;

      state.background = timer.background;
      state.sound = timer.sound;
      state.defaultTime = timer.defaultTime;
      state.defaultBreakTime = timer.defaultBreakTime;
    },
  },
});

export const selectTimerData = (state) => state.timerSlice;

export const { changeSettings, fetchTimer, setTimer } = timerSlice.actions;

export default timerSlice.reducer;
