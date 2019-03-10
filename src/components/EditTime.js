import React from 'react';

const EditTime = ({
  hours,
  minutes,
  seconds,
  setHours,
  setMinutes,
  setSeconds
}) => (
    <h1 onClick={(e) => e.stopPropagation()}>
      <input id="input-hours" className="form-control" type="number" min="0" value={hours} onChange={(e) => setHours(parseInt(e.currentTarget.value))} />
      <label htmlFor="input-hours">h</label>
      <input id="input-minutes" className="form-control" type="number" min="0" max="59" value={minutes} onChange={(e) => setMinutes(parseInt(e.currentTarget.value))} />
      <label htmlFor="input-minutes">m</label>
      <input id="input-seconds" className="form-control" type="number" min="0" max="59" value={seconds} onChange={(e) => setSeconds(parseInt(e.currentTarget.value))} />
      <label htmlFor="input-seconds">s</label>
    </h1>
  )

export default EditTime;