import {
    FetchTodosAction,
    Todo,
    AddTodosAction,
    UpdateTodosAction,
    DeleteTodosAction,
    SortTodosAscending,
    SortTodosDesending
  } from "../actions";
  import { ActionTypes } from "../actions/types";
  
  export type Actions =
    | FetchTodosAction
    | AddTodosAction
    | UpdateTodosAction
    | DeleteTodosAction
    | SortTodosAscending
    | SortTodosDesending;
  
  export const todoReducer = (state: Todo[] = [], action: Actions) => {
    switch (action.type) {
      case ActionTypes.fetchTodos:
        return action.payload;
      case ActionTypes.ascendingTodos:
        return action.payload; 
      case ActionTypes.desendingTodos:
        return action.payload;   
      case ActionTypes.addTodos:
        return state.concat(action.payload);
      case ActionTypes.updateTodos:
        return state.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo
        );
      case ActionTypes.deleteTodos:
        return state.filter((todo) => todo._id !== action.payload._id);
      default:
        return state;
    }
  };

