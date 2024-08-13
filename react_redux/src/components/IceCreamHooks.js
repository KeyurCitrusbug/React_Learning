import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'
function IceCreamHooks() 
{
    const noOfIceCreams=useSelector(state=>state.iceCream)
    const dispatch=useDispatch()
  return (
    <div>
        <h2>No of IceCream:- {noOfIceCreams.IceCreams}</h2>
        <button onClick={()=>dispatch(buyIceCream())}>Click to buy IceCream</button>
    </div>
  )
}

export default IceCreamHooks
