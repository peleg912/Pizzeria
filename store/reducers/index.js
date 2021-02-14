import {combineReducers} from 'redux';
import user from './userReducer';
import msg from './msgReducer';

const rootReducer = combineReducers({
    user,
    msg
});

export default rootReducer;