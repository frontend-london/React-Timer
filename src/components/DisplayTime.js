import React from 'react';

const DisplayTime = ({
  hours,
  minutes,
  seconds,
  onDisplayTimeClick
}) => {
  return (
    <h1 className="display-time" onClick={onDisplayTimeClick}>
      {(hours > 0) &&
        <>{hours}<span>h</span></>
      }
      {minutes}<span>m</span>
      {seconds.toString().padStart(2, '0')}<span>s</span>
    </h1>
  )
}

export default DisplayTime;