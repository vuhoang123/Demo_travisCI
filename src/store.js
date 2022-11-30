import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import homeReducer from './reducers/homeReducer';
import detailsReducer from './reducers/detailsReducer';

export default createStore(
    combineReducers({
        home: homeReducer, 
        details: detailsReducer
    }), 
    {}, 
    applyMiddleware(createLogger())
);