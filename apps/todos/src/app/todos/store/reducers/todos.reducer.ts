import { Action, createReducer, on } from '@ngrx/store';
import { ITodo } from '@todos-nx/data';
import { TodosService } from '../../services/todos.service';
import * as TodosActions from '../actions/todos.actions';

export interface TodosState {
  todos: ITodo[];
  busy: boolean;
  success: boolean;
  error: any;
}

export const initialState: TodosState = {
  todos: [],
  busy: false,
  success: false,
  error: null,
};

export const todosReducer = createReducer(
  initialState,
  on(TodosActions.fetchTodos, (state) => ({ ...state, busy: true })),
  on(
    TodosActions.fetchTodosSuccess,
    (state: TodosState, { todos }): TodosState => ({
      ...state,
      todos,
      busy: false,
      success: true,
    })
  ),
  on(
    TodosActions.fetchTodosFailure,
    (state: TodosState, { error }): TodosState => ({
      ...state,
      busy: false,
      success: false,
      error,
    })
  )
);
