// const formatTime = (seconds) => {
//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = seconds % 60;
//   return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
// };

// const startTimer = (initialTimeInSeconds, callback) => {
//   let timeRemaining = initialTimeInSeconds;

//   const intervalId = setInterval(() => {
//     timeRemaining--;

//     const formattedTime = formatTime(timeRemaining);

//     callback(formattedTime);

//     if (timeRemaining === 0) {
//       clearInterval(intervalId);
//     }
//   }, 1000);
// };

// export default startTimer;

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

const startTimer = (initialTimeInSeconds, callback, endCallback) => {
  const startTime = Date.now();
  const endTime = startTime + initialTimeInSeconds * 1000;

  const updateTimer = () => {
    const currentTime = Date.now();
    const timeRemaining = Math.max(0, Math.ceil((endTime - currentTime) / 1000));

    const formattedTime = formatTime(timeRemaining);

    if (timeRemaining === 0) {
      endCallback();
    } else {
      callback(formattedTime);

      requestIdleCallback(updateTimer);
    }
  };

  updateTimer();
};

export default startTimer;
