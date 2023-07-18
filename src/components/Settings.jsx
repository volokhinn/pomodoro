import React from 'react';
import styles from '../scss/components/_modal.module.scss';
import tomato from '../assets/svg/tomato.svg';
import gold from '../assets/svg/gold.svg';
import diamond from '../assets/svg/diamond.svg';
import platinum from '../assets/svg/platinum.svg';
import sound from '../assets/svg/sound.svg';

import useSound from 'use-sound';
import alarm1 from '../assets/audio/alarm1.mp3';
import alarm2 from '../assets/audio/alarm2.mp3';
import alarm3 from '../assets/audio/alarm3.mp3';
import alarm4 from '../assets/audio/alarm4.mp3';

import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { changeSettings, selectTimerData } from '../redux/slices/timerSlice';
import { useSelector } from 'react-redux';

const Settings = () => {
    const {
        background,
        sound: soundFile,
        defaultTime,
        defaultBreakTime,
      } = useSelector(selectTimerData);
    
      const [playAlarm1] = useSound(alarm1);
      const [playAlarm2] = useSound(alarm2);
      const [playAlarm3] = useSound(alarm3);
      const [playAlarm4] = useSound(alarm4);
    
      const alarmSounds = [
        { play: playAlarm1, sound: alarm1 },
        { play: playAlarm2, sound: alarm2 },
        { play: playAlarm3, sound: alarm3 },
        { play: playAlarm4, sound: alarm4 },
      ];
    
      const timesArray = [
        { time: 1500, break: 300, text: '25 мин' },
        { time: 2700, break: 900, text: '45 мин' },
        { time: 3600, break: 1200, text: '60 мин' },
      ];
    
      const dispatch = useDispatch();
    
      const [settings, setSettings] = useState({
        background,
        sound: soundFile,
        times: { time: defaultTime, break: defaultBreakTime },
      });
    
      const onSettingsChange = (type, value) => {
        setSettings({
          ...settings,
          [type]: value,
        });
      };
  
      dispatch(changeSettings(settings));
    
      const fightersImg = [tomato, gold, diamond, platinum];
      const fighters = fightersImg.map((fighter) => {
        return (
          <label key={fighter} className={styles.fighter__row_item}>
            <img className={styles.fighter__row_img} src={fighter} alt={fighter} />
            <input
              name="fighter"
              type="radio"
              className={styles.settings__input}
              value={fighter}
              onChange={() => onSettingsChange('background', fighter)}
              checked={fighter === settings.background}
            />
          </label>
        );
      });
    
      const alarms = alarmSounds.map((alarm, index) => {
        return (
          <label key={index} className={styles.settings__sound} onClick={() => alarm.play()}>
            <img src={sound} alt={sound} />
            <input
              name="alarm"
              type="radio"
              className={styles.settings__input}
              value={alarm.sound}
              onChange={() => onSettingsChange('sound', alarm.sound)}
              checked={alarm.sound === settings.sound}
            />
          </label>
        );
      });
    
      const times = timesArray.map((time, index) => {
        return (
          <label key={index} className={styles.settings__time}>
            {time.text}
            <input
              name="time"
              type="radio"
              className={styles.settings__input}
              value={time}
              onChange={() => onSettingsChange('times', time)}
              checked={time.time === settings.times.time}
            />
          </label>
        );
      });
    
      return (
        <>
          <div className={styles.wrapper__settings}>
            <div className={styles.top__row}></div>
            <div className={styles.settings__title}>НАСТРОЙКИ</div>
            <div className={styles.settings__label}>Выбери бойца</div>
            <div className={styles.fighter__row}>{fighters}</div>
            <div className={styles.settings__label}>Выбери звук</div>
            <div className={styles.settings__row}>{alarms}</div>
            <div className={styles.settings__label}>Выбери время</div>
            <div className={styles.settings__row}>{times}</div>
          </div>
        </>
      );
}

export default Settings