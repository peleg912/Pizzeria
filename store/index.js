import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {
    user: []
}

export const initializeStore = (state = initialState)=> {
    return createStore(
        reducer,
        state,
        composeWithDevTools()
    )
}