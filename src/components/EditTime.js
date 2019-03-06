import React from 'react';

const EditTime = (props) => (
  <>
    <input id="input-hours" className="form-control" type="number" value={props.hours} onChange={(e) => props.setHours(parseInt(e.currentTarget.value))} />
    <label htmlFor="input-hours">h</label>
    <input id="input-minutes" className="form-control" type="number" value={props.minutes} onChange={(e) => props.setMinutes(parseInt(e.currentTarget.value))} />
    <label htmlFor="input-minutes">m</label>
    <input id="input-seconds" className="form-control" type="number" value={props.seconds} onChange={(e) => props.setSeconds(parseInt(e.currentTarget.value))} />
    <label htmlFor="input-seconds">s</label>
  </>
)

export default EditTime;