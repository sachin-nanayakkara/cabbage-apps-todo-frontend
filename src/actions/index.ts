import axios from 'axios';
import {Dispatch} from 'redux'
import { ActionTypes } from './types';

export interface Todo {
    _id: string;
    title: string;
    createDate: string;
    activeStatus: boolean;
}

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos
    payload: Todo[]
}

export interface AddTodosAction {
    type: ActionTypes.addTodos
    payload: Todo
}

export interface UpdateTodosAction {
    type: ActionTypes.updateTodos
    payload: Todo
}

export interface DeleteTodosAction {
    type: ActionTypes.deleteTodos
    payload: Todo
}

export interface SortTodosAscending {
    type: ActionTypes.ascendingTodos
    payload: Todo[]
}

export interface SortTodosDesending {
    type: ActionTypes.desendingTodos
    payload: Todo[]
}

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>('http://localhost:3500/todos')
        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data
        })
    }
}


export const addTodos = (todo: Todo) => {
    return async (dispatch: Dispatch) => {
        const response = await axios.post<Todo>('http://localhost:3500/todos', {
            "title": todo.title,
            "createDate": todo.createDate,
            "activeStatus": todo.activeStatus
        })
        dispatch<AddTodosAction>({
            type: ActionTypes.addTodos,
            payload: response.data
        })
    }
}

export const updateTodos = (todo: Todo) => {
    return async (dispatch: Dispatch) => {
        const response = await axios.put<Todo>(`http://localhost:3500/todos/${todo._id}`, {
            activeStatus: todo.activeStatus
        })
        dispatch<UpdateTodosAction>({
            type: ActionTypes.updateTodos,
            payload: response.data
        })
    }
}

export const deleteTodos = (todo: Todo) => {
    return async (dispatch: Dispatch) => {
        const response = await axios.delete<Todo>(`http://localhost:3500/todos/${todo._id}`)
        dispatch<DeleteTodosAction>({
            type: ActionTypes.deleteTodos,
            payload: todo
        })
    }
}

export const sortTodosAscending = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>('http://localhost:3500/todos',{params : {"sort": true, "ascending":true}})
        dispatch<SortTodosAscending>({
            type: ActionTypes.ascendingTodos,
            payload: response.data
        })
    }
}

export const sortTodoDesending = () => {
    return async (dispatch: Dispatch) => {
        const response = await axios.get<Todo[]>('http://localhost:3500/todos',{params : {"sort": true, "ascending":false}})
        dispatch<SortTodosDesending>({
            type: ActionTypes.desendingTodos,
            payload: response.data
        })
    }
}
