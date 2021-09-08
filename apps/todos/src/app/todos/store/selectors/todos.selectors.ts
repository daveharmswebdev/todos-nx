import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodosState } from '../reducers/todos.reducer';

export const selectTodosState =
  createFeatureSelector<TodosState>('todosFeature');

export const selectTodos = createSelector(
  selectTodosState,
  (state) => state.todos
);
