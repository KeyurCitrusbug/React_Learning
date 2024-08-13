import React, { useCallback, useState } from 'react'
import Button from './Button'
function CallBack() 
{
    const [age,setAge]=useState(22)
    const incrementAge=useCallback(()=>{
        setAge(age+1)
    },[age])
  return (
    <div>
        Current Age:- {age}
        <Button handleClick={incrementAge}>Click to Increment Age</Button>
    </div>
  )
}

export default CallBack
