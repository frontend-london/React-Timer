import React, { useState } from 'react';
import DisplayTime from './DisplayTime';
import EditTime from './EditTime';
import './../styles/timer.scss';

const Timer = () => {
  const [editing, setEditing] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const stopEditing = () => setEditing(false);

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
          <button type="button" className="btn btn-primary">Start</button>
          <button type="button" className="btn btn-secondary">Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Timer;
