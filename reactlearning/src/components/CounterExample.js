import React,{useState,useEffect} from 'react'

function CounterExample() 
{
    const [counter,setCounter]=useState(0)
    const [isRunning, setRunning] = useState(false)
    const [intervalId,setIntervalID]=useState(null)
    const startCounter=()=>{setRunning(true)}
    const pauseCounter=()=>{setRunning(false)}
    const stopCounter=()=>
    {
        setRunning(false)
        setCounter(0)
    }
    useEffect(() => {
        if (isRunning) 
        {
            const id = setInterval(() => 
            {
                setCounter(prevValue => prevValue + 1);
            }, 1000);
            setIntervalID(id)
        } 
        else 
        {
            clearInterval(intervalId);   
        }        
        return () => 
        {
            clearInterval(intervalId);
        };
      }, [isRunning]);
      
  return (
    <div>
        <h5>Current Timer:- {counter}</h5>
        <button className='btn btn-primary me-2' onClick={startCounter}>Start</button>
        <button className='btn btn-warning me-2' onClick={pauseCounter}>Pause</button>
        <button className='btn btn-danger me-2' onClick={stopCounter}>Stop</button>
    </div>
  )
}

export default CounterExample
