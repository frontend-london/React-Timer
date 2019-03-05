import React from 'react';
import './../styles/timer.scss';

const Timer = () => (
  <div className="timer">
    <h2>Timer</h2>
    <h1>5<span>m</span> 00<span>s</span></h1>

    <div className="buttons">
      <button type="button" className="btn btn-primary">Start</button>
      <button type="button" className="btn btn-secondary">Reset</button>
    </div>
  </div>
)

export default Timer;
