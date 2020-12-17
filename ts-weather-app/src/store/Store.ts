import { createStore, applyMiddleware } from 'redux';
import RootReducer from './reducers/RootReducers';
import thunk from 'redux-thunk';

const Store = createStore(RootReducer, applyMiddleware(thunk))

export default Store;
export type RootState = ReturnType<typeof RootReducer>