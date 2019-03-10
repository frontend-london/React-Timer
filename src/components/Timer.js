import React, { useState } from "react";
import DisplayTime from './DisplayTime';
import EditTime from './EditTime';
import useAudio from './../hooks/useAudio';
import './../styles/timer.scss';

let intervalHandle,
  secondsRemaining;

const Timer = () => {
  const [counting, setCounting] = useState(false);
  const [editing, setEditing] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(3);
  const [secondsInitially, setSecondsInitially] = useState(300);
  const [alarm, setAlarm] = useAudio("audio/alarm.mp3");

  const handleStopCounting = () => {
    setCounting(false);
    clearInterval(intervalHandle);
  }

  const handleStopEditing = () => {
    setEditing(false);
  }

  const handleUpdateTime = () => {
    let hours = Math.floor(secondsRemaining / 3600),
      minutes = Math.floor(secondsRemaining / 60) - (hours * 60),
      seconds = secondsRemaining - (minutes * 60) - (hours * 3600);

    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  }

  const handleStartAlarm = () => {
    handleStopCounting();
    setAlarm(true);
  }

  const handleStopAlarm = () => {
    setAlarm(false);
  }

  const handleIntervalCycle = () => {
    handleUpdateTime();

    if (secondsRemaining === 0) {
      handleStartAlarm();
    }
    secondsRemaining--;
  }

  const onCardClick = () => {
    handleStopEditing();
    handleStopAlarm();
  }

  const onStartClick = (e) => {
    e.stopPropagation();
    setCounting(true);
    handleStopEditing();
    intervalHandle = setInterval(handleIntervalCycle, 1000);
    let startingTime = seconds + (minutes * 60) + (hours * 3600);
    setSecondsInitially(startingTime);
    secondsRemaining = startingTime - 1;
  }

  const onStopClick = (e) => {
    e.stopPropagation();
    handleStopCounting();
  }

  const onOkClick = (e) => {
    e.stopPropagation();
    setAlarm(false);
    // debugger;
  }

  const onResetClick = (e) => {
    e.stopPropagation();
    if (editing) {
      handleStopEditing();
    } else {
      handleStopCounting();
      secondsRemaining = secondsInitially;
      handleUpdateTime();
    }
  }

  const onDisplayTimeClick = (e) => {
    if (!alarm) {
      e.stopPropagation();
      handleStopCounting();
      setEditing(true);
    }
  };

  return (
    <div className="timer">
      <div className="card" onClick={onCardClick}>
        <div className="card-body">
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
                minutes={minutes}
                seconds={seconds}
                onDisplayTimeClick={onDisplayTimeClick}
              />
            )}
        </div>
        <hr />
        <div className="buttons">
          {alarm ? (
            <button type="button" className="btn btn-primary" onClick={onOkClick}>OK</button>
          ) : counting ? (
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
