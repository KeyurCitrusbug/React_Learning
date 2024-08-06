import React, { useState } from 'react'

function HookStateObject() 
{
    const [name,setName]=useState({firstName:''})
  return (
    <form>
        <input type='text' onChange={e=>setName({firstName:e.target.value})}/>
        <br/> Name From State:{name.firstName}
    </form>
  )
}

export default HookStateObject
