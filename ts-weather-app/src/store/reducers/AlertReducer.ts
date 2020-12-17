import { AlertAction, AlertState, SET_ALERT } from "../types";

const initialState: AlertState = {
    message: ''
}

const AlertReducer = (state: AlertState = initialState, action: AlertAction) => {
    switch(action.type){
        case SET_ALERT:
            return Object.assign({}, state, {message: action.payload})
        default:
            return state;
    }
}

export default AlertReducer;