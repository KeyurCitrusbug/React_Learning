"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
type Props={
    params:{
        token:string
    }
}
export default function DynamicRoutesDetails({ params }: Props) 
{
    const [errorMessage, setErrorMessage] = useState('')
    const [tokenVerified,setTokenVerification]=useState(false)
    const [successMessage, setSuccessMessage] = useState('')
    const apiUrl=process.env.NEXT_PUBLIC_REACT_APP_API_URL
    const verifyToken = async () => {
      try {
        const response = await axios.post(
          `${apiUrl}verify-user/${params.token}/`,
          {}
        );
        setTokenVerification(true)
        if (response.status === 400) 
        {
          setErrorMessage(response.data.message)
        } 
        else 
        {
          setSuccessMessage(response.data.message)
        }
      } 
      catch (error:any) 
      {
        setErrorMessage(error.response.data.message)
      }
    };
    useEffect(() => {
      verifyToken();
    }, []);
    return (
        <div className="text-center pt-5">
      {tokenVerified?(<h2 className='text-primary'>Token Verification Completed</h2>):(<h2 className='text-info'>Token Verification is in progress</h2>)}
      {tokenVerified? errorMessage.length? (<h2 className='text-danger'>{errorMessage}</h2>): (<h2 className='text-success'>{successMessage}</h2>):''}  
    </div>
    );
}