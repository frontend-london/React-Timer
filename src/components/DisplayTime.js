import React from 'react';

const DisplayTime = (props) => {
  return (
    <h1 className="display-time" onClick={props.startEditing}>
      {(props.hours > 0) &&
        <>{props.hours}<span>h</span></>
      }
      {props.minutes}<span>m</span>
      {props.seconds.toString().padStart(2, '0')}<span>s</span>
    </h1>
  )
}

export default DisplayTime;