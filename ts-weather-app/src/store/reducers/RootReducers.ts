import { combineReducers } from 'redux';
import AlertReducer from './AlertReducer';
import WeatherReducer from './WeatherReducer';

const RootReducer = combineReducers({
    alert: AlertReducer,
    weather: WeatherReducer
})

export default RootReducer;