import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodosService } from '../../services/todos.service';
import {
  fetchTodos,
  fetchTodosFailure,
  fetchTodosSuccess,
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

  constructor(private actions$: Actions, private todosService: TodosService) {}
}
