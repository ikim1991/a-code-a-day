import { GET_WEATHER, SET_ERROR, SET_LOADING, WeatherAction, WeatherState } from "../types";

const initialState: WeatherState = {
    data: null,
    loading: false,
    error: ""
}

export default (state: WeatherState = initialState, action: WeatherAction) => {

    switch(action.type){
        case GET_WEATHER:
            return Object.assign({}, state, {...state, data: action.payload})
        
        case SET_LOADING:
            return Object.assign({}, state, {...state, loading: true});

        case SET_ERROR:
            return Object.assign({}, state, {...state, error: action.payload, loading: false})
        
        default:
            return state;
    }
}