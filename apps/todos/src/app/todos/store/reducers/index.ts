import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { ITodo } from '@todos-nx/data';
import * as fromTodos from './todos.reducer';
import { environment } from '../../../../environments/environment';

export const todosFeatureKey = 'todos';

export interface State {
  todos: fromTodos.TodosState;
}

export const reducers: ActionReducerMap<State> = {
  todos: fromTodos.todosReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
