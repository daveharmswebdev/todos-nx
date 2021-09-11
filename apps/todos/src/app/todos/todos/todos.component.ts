import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ITodo, ITodoToCreate, ITodoView } from '@todos-nx/data';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  createTodo,
  deleteTodo,
  fetchTodos,
} from '../store/actions/todos.actions';
import { TodosState } from '../store/reducers/todos.reducer';
import { selectTodosViews } from '../store/selectors/todos.selectors';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'todos-nx-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos$!: Observable<ITodoView[]>;
  addMode = new BehaviorSubject<boolean>(true);
  addMode$ = this.addMode.asObservable();

  constructor(private store: Store<TodosState>) {}

  ngOnInit() {
    this.todos$ = this.store.pipe(select(selectTodosViews));

    this.store.dispatch(fetchTodos());
  }

  testDelete() {
    this.store.dispatch(
      deleteTodo({ id: 'b097d1be-73be-b844-8c27-9e877adc16db' })
    );
  }

  handleDeleteTodo(id: string) {
    this.store.dispatch(deleteTodo({ id }));
  }

  toggleAddMode() {
    this.addMode.next(!this.addMode.value);
  }

  handleCreateTodo(todoToCreate: ITodoToCreate) {
    const todo: ITodo = {
      ...todoToCreate,
      id: Guid.create.toString(),
    };
    this.store.dispatch(createTodo({ todo }));
  }
}
