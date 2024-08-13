import React, { useReducer,useEffect } from 'react'
import axios from 'axios'
const intitialState={
    loading:true,
    error:'',
    post:{}
}
const reducer=(state,action)=>
{
    switch(action.type)
    {
        case 'Success':
            return{
                loading:false,
                error:'',
                post:action.payload
            }
        case 'Error':
            return{
                loading:false,
                error:'Something Went Wrong',
                post:{}
            }
        default:
            return state
    }
}
function FetchDataReducer() 
{
    const [state,dispatch]=useReducer(reducer,intitialState)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/3')
        .then(
            res=>{
                dispatch({type:'Success',payload:res.data})
            }
        )
        .catch(err=>{
            dispatch({type:'Error'})
        })
    },[])
  return (
    <div>
      {state.loading?'Loading':state.post.title}
    </div>
  )
}
export default FetchDataReducer
