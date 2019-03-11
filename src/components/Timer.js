import React, { useState } from "react";
import DisplayTime from './DisplayTime';
import EditTime from './EditTime';
import useAudio from './../hooks/useAudio';
import './../styles/timer.scss';

const initialSeconds = 20;

let intervalHandle,
  secondsRemaining = initialSeconds;

const Timer = () => {
  const [counting, setCounting] = useState(false);
  const [editing, setEditing] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [secondsInitially, setSecondsInitially] = useState(initialSeconds);
  const [alarm, setAlarm] = useAudio("audio/alarm.mp3");

  const handleSetRemainingTime = (time) => {
    secondsRemaining = time;
  }

  const handleStopCounting = () => {
    setCounting(false);
    clearInterval(intervalHandle);
  }

  const handleStopEditing = () => {
    setEditing(false);
    let startingTime = seconds + (minutes * 60) + (hours * 3600);
    setSecondsInitially(startingTime);
    handleSetRemainingTime(startingTime);
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
    secondsRemaining--;
    handleUpdateTime();

    if (secondsRemaining === 0) {
      handleStartAlarm();
    }
  }

  const onCardClick = () => {
    handleStopEditing();
    handleStopAlarm();
  }

  const onStartClick = (e) => {
    e.stopPropagation();
    setCounting(true);
    if (editing) {
      handleStopEditing();
    }
    intervalHandle = setInterval(handleIntervalCycle, 1000);
  }

  const onStopClick = (e) => {
    e.stopPropagation();
    handleStopCounting();
  }

  const onOkClick = (e) => {
    e.stopPropagation();
    setAlarm(false);
  }

  const onResetClick = (e) => {
    e.stopPropagation();
    handleStopCounting();
    handleSetRemainingTime(secondsInitially);
    handleUpdateTime();
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

        <div className="progress">
          <div className="progress-bar" style={{ width: (100 - (100 * secondsRemaining / secondsInitially)) + '%' }}></div>
        </div>

        <div className="buttons">
          {alarm ? (
            <button type="button" className="btn btn-primary" onClick={onOkClick}>OK</button>
          ) : counting ? (
            <button type="button" className="btn btn-primary" onClick={onStopClick}>Stop</button>
          ) : (
                <button type="button" className={'btn ' + ((hours + minutes + seconds) > 0 ? 'btn-primary' : 'btn-light disabled')} onClick={onStartClick} >Start</button>
              )}
          <button type="button" className="btn btn-secondary" onClick={onResetClick}>Reset</button>
        </div>
      </div>
    </div >
  )
}

export default Timer;
