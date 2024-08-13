import React, { useState,useMemo } from 'react'

function UseMemo() 
{
    const [counterOne,setCounterOne]=useState(0)
    const [counterTwo,setCounterTwo]=useState(0)
    const incrementCount=()=>{
        setCounterOne(counterOne+1)
    }
    const incrementCountTwo=()=>{
        setCounterTwo(counterTwo+1)
    }
    const isEven=useMemo(()=>{
        let i
        while(i<9999999999999999999999999999999999) i++
        return counterOne%2==0   
    })
  return (
    <div>
        <button onClick={incrementCount}>Counter One:- {counterOne} EVEN OR NOT: {isEven?'Even':'Odd'}</button>
        <button onClick={incrementCountTwo}>Counter One:- {counterTwo}</button>
    </div>
  )
}

export default UseMemo
