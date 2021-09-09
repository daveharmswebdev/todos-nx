import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ITodo } from '@todos-nx/data';
import { Observable } from 'rxjs';
import { createTodo, fetchTodos } from '../store/actions/todos.actions';
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
}
