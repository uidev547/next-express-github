export function testIndexApp() {
    return (dispatch) => {
        dispatch({
            type: 'TEST_INDEX_APP',
            payload: 'YES I AM TESTING...'
        });
    };
}

export function anotherTestIndexApp() {
    return (dispatch) => {
        return dispatch({
            type: 'ANOTHER_TEST_INDEX_APP',
            payload: 'ANOTHER_TEST_INDEX_APP YES I AM TESTING...'
        });
    };
}