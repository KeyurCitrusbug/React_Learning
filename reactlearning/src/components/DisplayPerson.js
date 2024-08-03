import React from 'react'

const DisplayPerson = ({person}) => 
{
  return (
    <div>
        <h5>Name is : {person.name} and Role Is: {person.role}</h5>
    </div>
  )
}

export default DisplayPerson
