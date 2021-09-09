import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodosState } from '../reducers/todos.reducer';
import * as fromTodos from '../reducers/todos.reducer';

export const selectTodosState =
  createFeatureSelector<TodosState>('todosFeature');

export const selectTodos = createSelector(
  selectTodosState,
  fromTodos.selectAllTodos
);
