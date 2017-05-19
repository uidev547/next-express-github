
const initialState = {
    lazydata: ''
};

const userData = (state = initialState, action) => {
    switch (action.type) {
        case `SET_USER`:
            return {
                ...state,
                user: action.payload
            }
        case 'GET_API_DATA_FULFILLED': 
            return {
                ...state,
                lazydata: action.payload
            };
        default:
            return state;
    }
};

export default userData;
