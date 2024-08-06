 import React,{useState} from 'react'
 
 function HookCount() 
 {
    const[timeList,setTimeList]=useState([]);
    const addTime = () => {
        setTimeList([...timeList, new Date()]);
    };
   return (
     <div>
       <button onClick={addTime}>Add Time</button>
       <>
       {timeList.map((item, index) => (
                    <h2 key={index}>Time Is: {item.toString()}</h2>
                ))}
       </>
     </div>
   )
 }
 
 export default HookCount
 