import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ITodo } from '@todos-nx/data';
import { Observable } from 'rxjs';
import { TodosService } from '../services/todos.service';
import { fetchTodos } from '../store/actions/todos.actions';
import { TodosState } from '../store/reducers/todos.reducer';
import { selectTodos } from '../store/selectors/todos.selectors';

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
    this.todos$ = this.store.pipe(select(selectTodos));

    this.store.dispatch(fetchTodos());
  }
}
