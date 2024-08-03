import React from 'react'
import DisplayPerson from './DisplayPerson'
function List() 
{
    const developers=[
        {
            'role':'Laravel Developer',
            'name':'Keyur'
        },
        {
            'role':'Frontend Developer',
            'name':'ABC'
        },
        {
            'role':'FullStack Developer',
            'name':'XYZ'
        }
    ]
    const namesList=developers.map(item=><DisplayPerson key={item.name} person={item}/>)
  return (
    <div>
      {namesList}
    </div>
  )
}

export default List
