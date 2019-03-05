import React from 'react';
import DisplayTime from './DisplayTime';
import EditTime from './EditTime';
import './../styles/timer.scss';

const Timer = () => (
  <div className="timer">
    <h2>Timer</h2>
    {/* <DisplayTime /> */}
    <EditTime />

    <div className="buttons">
      <button type="button" className="btn btn-primary">Start</button>
      <button type="button" className="btn btn-secondary">Reset</button>
    </div>
  </div>
)

export default Timer;
