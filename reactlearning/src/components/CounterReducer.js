import React,{useReducer} from 'react'
const intitialState={
    count:0
}
const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'increment':
            return {count:state.count+action.value}
        case 'decrement':
            return {count:state.count-action.value}
        case 'reset':
            return intitialState
        default:
            return state
    }
}
function CounterReducer() 
{
    const [count,dispatch]=useReducer(reducer,intitialState)
    const [count2,dispatch2]=useReducer(reducer,intitialState)
  return (
    <div>
        <div>Count 1:- {count.count}</div>
        <button onClick={()=>dispatch({type:'increment',value:5})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        <div>Count 2:- {count2.count}</div>
        <button onClick={()=>dispatch2({type:'increment',value:5})}>Increment</button>
        <button onClick={()=>dispatch2({type:'decrement',value:5})}>Decrement</button>
        <button onClick={()=>dispatch2 ({type:'reset'})}>Reset</button>
    </div>
  )
}

export default CounterReducer
