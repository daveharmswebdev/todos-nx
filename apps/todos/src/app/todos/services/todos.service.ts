import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITodo, TodoStatus } from '@todos-nx/data';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class TodosService {
  private baseUrl = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.baseUrl);
  }

  createTodo(todo: ITodo) {
    return this.http.post<ITodo>(this.baseUrl, todo);
  }

  deleteTodo(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateTodoStatus(id: string, status: TodoStatus) {
    return this.http.patch(this.baseUrl + `/${id}`, {
      status,
    });
  }
}
