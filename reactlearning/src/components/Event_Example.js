import React from 'react'

const EventExample=()=>
{
    function handleClickEvent()
    {
        console.log('Handle click event');
    }
    return( 
    <div>
        <button onClick={handleClickEvent}></button>
    </div>
    )
}
export default EventExample;