import React, { useContext } from 'react'
import { CounterContext } from '../App'
function ReducerContext() 
{
    const countContext=useContext(CounterContext)
  return (
    <div>
        <button onClick={()=>countContext.dispatchedEvent({type:'increment'})}>Increment</button>
        <button onClick={()=>countContext.dispatchedEvent({type:'decrement'})}>Decrement</button>
        <button onClick={()=>countContext.dispatchedEvent({type:'reset'})}>Reset</button>
    </div>
  )
}

export default ReducerContext
