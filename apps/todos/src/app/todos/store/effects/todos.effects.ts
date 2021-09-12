import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ITodo } from '@todos-nx/data';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodosService } from '../../services/todos.service';
import {
  createTodo,
  createTodoFailure,
  createTodoSuccess,
  deleteTodo,
  deleteTodoSuccess,
  fetchTodos,
  fetchTodosFailure,
  fetchTodosSuccess,
  updateTodoStatus,
  updateTodoStatusFailure,
  updateTodoStatusSuccess,
} from '../actions/todos.actions';

@Injectable()
export class TodosEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchTodos),
      mergeMap(() =>
        this.todosService.getTodos().pipe(
          map((todos) => fetchTodosSuccess({ todos })),
          catchError((error) => of(fetchTodosFailure({ error })))
        )
      )
    )
  );

  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTodo),
      mergeMap(({ todo }) =>
        this.todosService.createTodo(todo).pipe(
          map((response) => createTodoSuccess({ response })),
          catchError((error) => of(createTodoFailure({ error })))
        )
      )
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTodo),
      mergeMap(({ id }) =>
        this.todosService.deleteTodo(id).pipe(
          map(() => deleteTodoSuccess({ id })),
          catchError((error) => of(createTodoFailure({ error })))
        )
      )
    )
  );

  updateTodoStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateTodoStatus),
      mergeMap(({ id, status }) =>
        this.todosService.updateTodoStatus(id, status).pipe(
          map((response) => updateTodoStatusSuccess({ response })),
          catchError((error) => of(updateTodoStatusFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private todosService: TodosService) {}
}
