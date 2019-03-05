import React, { useState } from 'react';
import DisplayTime from './DisplayTime';
import EditTime from './EditTime';
import './../styles/timer.scss';

const Timer = () => {
  const [editing, setEditing] = useState(false);
  const stopEditing = () => setEditing(false);
  const startEditing = (e) => {
    e.stopPropagation();
    setEditing(true);
  };

  return (
    <div className="timer">

      <div className="card">
        <div className="card-body" onClick={stopEditing}>
          <h2>Timer</h2>
          {editing ? (
            <EditTime />
          ) : (
              <h1 className="display-time" onClick={startEditing}>
                <DisplayTime />
              </h1>
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
