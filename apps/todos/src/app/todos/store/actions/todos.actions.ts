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

export const createTodo = createAction(
  '[todo component] create todo',
  props<{ todo: ITodo }>()
);

export const createTodoSuccess = createAction(
  '[todo component] create todo success',
  props<{ response: ITodo }>()
);

export const createTodoFailure = createAction(
  '[todo component] create todo failure',
  props<{ error: any }>()
);
