import React from 'react';

const DisplayTime = (props) => {
  const startEditing = (e) => {
    e.stopPropagation();
    props.setEditing(true);
  };

  return (
    <h1 className="display-time" onClick={startEditing}>
      {(props.hours > 0) &&
        <>{props.hours}<span>h</span></>
      }
      {props.minutes}<span>m</span>
      {props.seconds.toString().padStart(2, '0')}<span>s</span>
    </h1>
  )
}

export default DisplayTime;