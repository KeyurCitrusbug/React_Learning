import React from 'react'
import './style.css'
const Style = (props) => 
{

  return (
    <div>
        <h5 className={`${props.displayInBlue? 'text-blue':''} text-large`}>Text in White Color</h5>
    </div>
  )
}

export default Style
