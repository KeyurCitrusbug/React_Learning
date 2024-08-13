import React from 'react'

function Button({handleClick,child}) 
{
  return (
    <div>
        <button onClick={handleClick}>Click to Increment Age</button>
    </div>
  )
}

export default Button
