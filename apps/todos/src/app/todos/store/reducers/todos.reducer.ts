import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ITodo } from '@todos-nx/data';
import * as TodosActions from '../actions/todos.actions';

export interface TodosState extends EntityState<ITodo> {
  selectedTodoId: string;
  busy: boolean;
  success: boolean;
  error: any;
}

export function selectTodoId(t: ITodo): string {
  return t.id;
}

export function sortByName(a: ITodo, b: ITodo): number {
  return a.name.localeCompare(b.name);
}

export const adapter: EntityAdapter<ITodo> = createEntityAdapter<ITodo>({
  selectId: selectTodoId,
  sortComparer: sortByName,
});

export const initialState: TodosState = adapter.getInitialState({
  selectedTodoId: '',
  success: false,
  busy: false,
  error: null,
});

export const todosReducer = createReducer(
  initialState,
  on(
    TodosActions.fetchTodos,
    (state: TodosState): TodosState => ({
      ...state,
      busy: true,
    })
  ),
  on(
    TodosActions.fetchTodosSuccess,
    (state: TodosState, { todos }): TodosState => ({
      ...adapter.addMany(todos, state),
      busy: false,
      success: true,
      error: null,
    })
  ),
  on(
    TodosActions.createTodoSuccess,
    (state: TodosState, { response }): TodosState => ({
      ...adapter.addOne(response, state),
      busy: false,
      success: true,
      error: null,
    })
  ),
  on(
    TodosActions.deleteTodo,
    (state: TodosState): TodosState => ({
      ...state,
      busy: true,
    })
  ),
  on(
    TodosActions.deleteTodoSuccess,
    (state: TodosState, { id }): TodosState => ({
      ...adapter.removeOne(id, state),
      busy: false,
      success: true,
      error: null,
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
  ),
  on(
    TodosActions.createTodoFailure,
    (state: TodosState, { error }): TodosState => ({
      ...state,
      busy: false,
      success: false,
      error,
    })
  ),
  on(
    TodosActions.deleteTodoFailure,
    (state: TodosState, { error }): TodosState => ({
      ...state,
      busy: false,
      success: false,
      error,
    })
  )
);

export function reducer(state: TodosState | undefined, action: Action) {
  return todosReducer(state, action);
}

// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();

// select the array of user ids
export const selectUserIds = selectIds;

// select the dictionary of user entities
export const selectUserEntities = selectEntities;

// select the array of users
export const selectAllTodos = selectAll;

// select the total user count
export const selectTodosTotal = selectTotal;
