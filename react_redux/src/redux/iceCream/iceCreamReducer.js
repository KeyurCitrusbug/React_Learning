const initialState = {
    IceCreams: 15
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_IceCream':
            return {
                ...state,
                IceCreams: state.IceCreams - 1
            }
        default:
            return state
    }
}

export default iceCreamReducer
