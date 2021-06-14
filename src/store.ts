import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import RootReducer from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));
export type RootStore = ReturnType<typeof RootReducer>

export default store;