import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import promise from 'redux-promise-middleware';
export default function configureStore(initialState = {}) {
    const logger = createLogger({
        collapsed: true,
        predicate: () =>
        process.env.NODE_ENV === `development`, // eslint-disable-line no-unused-vars
    });
    const middleware = applyMiddleware(promise(), thunkMiddleware, logger);
    const store = middleware(createStore)(rootReducer, initialState);
    return store;
}
