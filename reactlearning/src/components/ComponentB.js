import React,{useContext} from 'react'
import { UserContext } from '../App'
function ComponentB() 
{
  const name=useContext(UserContext)
  return (
    <div>
      {name}
    </div>
  )
}

export default ComponentB
