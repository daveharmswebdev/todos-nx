import { createAction, props } from '@ngrx/store';
import { ITodo } from '@todos-nx/data';

export const fetchTodos = createAction('[todos component] fetch todos');

export const fetchTodosSuccess = createAction(
  '[todos effects] fetch todos success',
  props<{ todos: ITodo[] }>()
);

export const fetchTodosFailure = createAction(
  '[todos effects] fetch todos failure',
  props<{ error: any }>()
);
