import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux'
function HooksCakeContainer() 
{
    const noOfCakes=useSelector(state=>state.cake)
    const dispatch=useDispatch()
  return (
    <div>
        <h2>No of Cakes:- {noOfCakes.Cakes}</h2>
        <button onClick={()=>dispatch(buyCake())}>Click to buy cake</button>
    </div>
  )
}

export default HooksCakeContainer
