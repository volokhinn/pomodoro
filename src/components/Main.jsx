import React from "react";
import styles from "../scss/index.module.scss";
import { selectTimerData } from "../redux/slices/timerSlice";
import { useSelector } from "react-redux";

const Main = () => {
  const { defaultTime } = useSelector(selectTimerData);
  return (
    <>
      <h1>
        НУ ЧТО <br></br> РАБОТЯГА <br></br> ТЫ ГОТОВ?
      </h1>
      <p className={styles.description}>
        После старта, таймер на 
        <span style={{ color: "#fff" }}>
          {Math.floor(defaultTime / 60)} минут{" "}
        </span>
        будет запущен.<br></br> Тебе нужно будет работать не отвлекаясь.{" "}
        <br></br> Потом будет отдых. Поехали?
      </p>
    </>
  );
};

export default Main;
