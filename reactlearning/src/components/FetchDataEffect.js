import React, { useState,useEffect } from 'react'
import axios from 'axios';
function FetchDataEffect() 
{
    const [comments,getComments]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(
            res=>{
                console.log('res===',res);
                getComments(res.data);
            }
        )
        .catch(err=>{
            console.log('error==',err);
        })
    },[])
  return (
    <div>
        <table className="table table-responsive table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    comments.map(item=>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ) 
                } 
            </tbody>
        </table>
    
    </div>
  )
}

export default FetchDataEffect
