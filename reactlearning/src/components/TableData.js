import React from 'react'

const TableData = () => 
{
    const data=[
        {
            'id':1,
            name:'keyur'
        },
        {
            'id':2,
            name:'abc'
        },
        {
            'id':3,
            name:'xyz'
        }
    ];
    const style={
        'display':'flex',
        'justifyContent':'center',
        'alignContent':'center'
    }
    const row=data.map(item=><tr key={item.id}><td>{item.id}</td><td>{item.name}</td></tr>)
  return (
    <>
        <div style={style}>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </table>
        </div>
    </>  
  )
}

export default TableData
