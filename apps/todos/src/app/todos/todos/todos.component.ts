import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITodo } from '@todos-nx/data';
import { Observable } from 'rxjs';
import { TodosService } from '../services/todos.service';
import { fetchTodos } from '../store/actions/todos.actions';
import { TodosState } from '../store/reducers/todos.reducer';

@Component({
  selector: 'todos-nx-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos$!: Observable<ITodo[]>;

  constructor(
    private todosService: TodosService,
    private store: Store<TodosState>
  ) {}

  ngOnInit() {
    this.todos$ = this.todosService.getTodos();

    this.store.dispatch(fetchTodos());
  }
}
