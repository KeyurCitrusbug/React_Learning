import React,{useState} from 'react'

function HookState() 
{
    const initialCount=0;
    const[count,setCount]=useState(initialCount)
  return (
    <div>
        Current Count : {count}
        <button onClick={()=>setCount(prevValue=>prevValue+1)}>Increment Count</button>
        <button onClick={()=>setCount(prevValue=>prevValue-1)}>Decrement Count</button>
    </div>
  )
}

export default HookState
