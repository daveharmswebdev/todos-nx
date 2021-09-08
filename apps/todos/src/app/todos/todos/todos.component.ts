import { Component, OnInit } from '@angular/core';
import { ITodo } from '@todos-nx/data';
import { Observable } from 'rxjs';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'todos-nx-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos$!: Observable<ITodo[]>;

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todos$ = this.todosService.getTodos();
  }
}
