import React from 'react';

const DisplayTime = (props) => (
  <>
    {(props.hours > 0) &&
      <>{props.hours}<span>h</span></>
    }
    {props.minutes}<span>m</span>
    {props.seconds.toString().padStart(2, '0')}<span>s</span>
  </>
)

export default DisplayTime;