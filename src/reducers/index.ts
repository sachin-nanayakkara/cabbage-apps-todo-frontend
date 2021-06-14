import {combineReducers} from 'redux';
import { todoReducer } from './todos';
import { Todo } from '../actions';

export interface StoreState {
    todos: Todo[]
}

const RootReducer = combineReducers<StoreState>({
    todos: todoReducer
});

export default RootReducer;