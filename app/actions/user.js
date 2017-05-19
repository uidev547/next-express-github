export const setUser = function(user) {
    return (dispatch) => {
        dispatch({
            type: 'SET_USER',
            payload: user
        });
    }
};


export const getApiData = function() {
    const getData = new Promise((res,rej) => {
        setTimeout(() => {
            res('This is resolved data....' + Math.random());
        }, 1000);
    });
    return (dispatch) => {
        return dispatch({
            type: 'GET_API_DATA',
            payload: getData
        });
    }
};