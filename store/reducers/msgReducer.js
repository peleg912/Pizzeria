import * as actionType from '../types';

const reducer = (state= null, action)=> {
    switch (action.type){
        case actionType.SEND_MSG:
            return {...state, sentEmail: action.payload};

        case actionType.CLEAR_MSG:
            return {...state, sentEmail: action.payload};

        default: return state;
    }
}

export default reducer;