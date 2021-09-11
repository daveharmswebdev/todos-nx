import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodosState } from '../reducers/todos.reducer';
import * as fromTodos from '../reducers/todos.reducer';
import { IPerson, ITodoView } from '@todos-nx/data';

const personToString = (person: IPerson) => {
  return [
    person.firstName,
    person.middleInitial ? person.middleInitial + '.' : null,
    person.lastName,
    person.suffix,
  ]
    .filter((x) => x !== null)
    .join(' ');
};

export const selectTodosState =
  createFeatureSelector<TodosState>('todosFeature');

export const selectTodos = createSelector(
  selectTodosState,
  fromTodos.selectAllTodos
);

export const selectTodosViews = createSelector(selectTodos, (todos) =>
  todos.map(
    (todo) =>
      ({
        id: todo.id,
        name: todo.name,
        assignedTo: personToString(todo.assignedTo),
        description: todo.description,
        status: todo.status,
      } as ITodoView)
  )
);
