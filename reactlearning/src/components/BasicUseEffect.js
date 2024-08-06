import React,{useState,useEffect} from 'react'

function BasicUseEffect() 
{
    const [count,updateCount]=useState(0)
    const [name,updateName]=useState('')
    useEffect(()=>{
        document.title=`Clicked ${count} times`
    }, [count])
  return (
    <div>
        <input type='text' onChange={e=>updateName(e.target.value)}/>
        <button onClick={()=>updateCount(count+1)}>Click To Increment</button>
    </div>
  )
}

export default BasicUseEffect
