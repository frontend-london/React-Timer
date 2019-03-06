import React, { useState } from 'react';
import DisplayTime from './DisplayTime';
import EditTime from './EditTime';
import './../styles/timer.scss';

const Timer = () => {
  const [counting, setCounting] = useState(false);
  const [editing, setEditing] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [secondsInitially, setSecondsInitially] = useState(300);
  const [intervalHandle, setIntervalHandle] = useState();
  const stopEditing = () => setEditing(false);

  let secondsRemaining;

  const updateTime = () => {
    let hours = Math.floor(secondsRemaining / 3600),
      minutes = Math.floor(secondsRemaining / 60) - (hours * 60),
      seconds = secondsRemaining - (minutes * 60) - (hours * 3600);

    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }

  const cycle = () => {
    updateTime();

    if (minutes === 0 && seconds === 0) {
      clearInterval(intervalHandle);
    }
    secondsRemaining--;
  }

  const onStartClick = () => {
    setCounting(true);
    setEditing(false);
    setIntervalHandle(setInterval(cycle, 1000));
    let startingTime = seconds + (minutes * 60) + (hours * 3600);
    setSecondsInitially(startingTime);
    secondsRemaining = startingTime - 1;
  }

  const onStopClick = () => {
    setCounting(false);
    clearInterval(intervalHandle);
  }

  const onResetClick = () => {
    onStopClick();
    secondsRemaining = secondsInitially;
    updateTime();
  }

  return (
    <div className="timer">
      <div className="card">
        <div className="card-body" onClick={stopEditing}>
          <h2>Timer</h2>
          {editing ? (
            <EditTime
              hours={hours}
              setHours={setHours}
              minutes={minutes}
              setMinutes={setMinutes}
              seconds={seconds}
              setSeconds={setSeconds}
            />
          ) : (
              <DisplayTime
                hours={hours}
                setHours={setHours}
                minutes={minutes}
                setMinutes={setMinutes}
                seconds={seconds}
                setSeconds={setSeconds}
                setEditing={setEditing}
              />
            )}
        </div>
        <hr />
        <div className="buttons">
          {counting ? (
            <button type="button" className="btn btn-primary" onClick={onStopClick}>Stop</button>
          ) : (
              <button type="button" className="btn btn-primary" onClick={onStartClick}>Start</button>
            )}
          <button type="button" className="btn btn-secondary" onClick={onResetClick}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Timer;
