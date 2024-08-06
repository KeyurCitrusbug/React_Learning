import React, { useState } from 'react'
import ChildForm from './ChildForm'

function ParentForm() 
{
    const [name,setName]=useState("");
    const getData=(data)=>{
        setName(data)
    }
  return (
    <div>
        Name From Child:-{name}
        <ChildForm ChangeName={getData}/>
    </div>
  )
}

export default ParentForm
