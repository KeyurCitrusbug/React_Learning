import React, { Component } from 'react'
import Memo from './Memo'

class ParentComponent extends Component 
{
    constructor(props)
    {
        super(props)
        this.state={
            name:'keyur'
        }
        setInterval(()=>{
            this.state.name='keyur'
        },2000)
    }
  render() {
    return (
      <div>
        <Memo name={this.state.name}/>
      </div>
    )
  }
}
export default ParentComponent
