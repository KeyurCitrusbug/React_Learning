import React,{Component} from 'react'
class State_Example extends Component
{
    constructor()
    {
        super()
        this.state={
            name:''
        }
        this.changeName = this.changeName.bind(this);
    }
    changeName(event)
    {
        console.log('event==',event);
        if(event.key==='Enter')
        {
            this.setState({
                name:event.target.value
            });
        }
    }
    render()
    {
        return(
            <div>
                <h1>Name is:-{this.state.name}</h1>
                <input type='text' name='fullname' onKeyDown={this.changeName}/>
                {/* <button onClick={()=>this.updateCount()}>Change Count</button> */}
            </div>
        )
    }
}
export default State_Example;