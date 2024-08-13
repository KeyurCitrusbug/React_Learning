import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'
function CakeContainer(props) {
    return (
        <div>
            <h2>Current number of Cakes: {props.Cakes}</h2>
            <button onClick={props.buyCake}>Buy a Cake</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        Cakes: state.Cakes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
