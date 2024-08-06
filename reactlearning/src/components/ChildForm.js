import React,{useState} from 'react'

function ChildForm({setName}) 
{
    const [name,updateName]=useState("")
    const handleNameChange=(e)=>{
        updateName(e.target.value)
        setName(e.target.value)
    }
  return (
    <div>
        <input type='text' value={name} onChange={handleNameChange}/>
    </div>
  )
}

export default ChildForm
