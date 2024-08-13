const initialState = {
    Cakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_CAKE':
            return {
                ...state,
                Cakes: state.Cakes - 1
            }
        default:
            return state
    }
}

export default cakeReducer
