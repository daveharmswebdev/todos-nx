import { createAction, props } from '@ngrx/store';
import { ITodo, TodoStatus } from '@todos-nx/data';

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
  '[todo effects] create todo success',
  props<{ response: ITodo }>()
);

export const createTodoFailure = createAction(
  '[todo effects] create todo failure',
  props<{ error: any }>()
);

export const deleteTodo = createAction(
  '[todo component] delete todo',
  props<{ id: string }>()
);

export const deleteTodoSuccess = createAction(
  '[todo effects] delete todo success',
  props<{ id: string }>()
);

export const deleteTodoFailure = createAction(
  '[todo effects] delete todo failure',
  props<{ error: any }>()
);

export const updateTodoStatus = createAction(
  '[todo component] update todo status',
  props<{ id: string; status: TodoStatus }>()
);

export const updateTodoStatusSuccess = createAction(
  '[todo effects] update todo status success',
  props<{ response: any }>()
);

export const updateTodoStatusFailure = createAction(
  '[todo effects] update todo status failure',
  props<{ error: any }>()
);
