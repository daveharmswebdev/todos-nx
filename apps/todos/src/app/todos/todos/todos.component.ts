import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ITodo } from '@todos-nx/data';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  createTodo,
  deleteTodo,
  fetchTodos,
} from '../store/actions/todos.actions';
import { TodosState } from '../store/reducers/todos.reducer';
import { selectTodos } from '../store/selectors/todos.selectors';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'todos-nx-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos$!: Observable<ITodo[]>;
  addMode = new BehaviorSubject<boolean>(false);
  addMode$ = this.addMode.asObservable();

  constructor(private store: Store<TodosState>) {}

  ngOnInit() {
    this.todos$ = this.store.pipe(select(selectTodos));

    this.store.dispatch(fetchTodos());
  }

  test() {
    const guidString = Guid.create().toString();
    const todo: ITodo = {
      id: guidString,
      name: 'test todo 2 ' + guidString,
      assignedTo: 'Test Doer',
      description: 'test description ' + guidString,
      status: 4,
    };
    this.store.dispatch(createTodo({ todo }));
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
}
