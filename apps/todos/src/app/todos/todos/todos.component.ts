import { Component } from '@angular/core';
import { ITodo, TodoStatus } from '@todos-nx/data';

@Component({
  selector: 'todos-nx-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  todos: ITodo[] = [
    {
      id: 'e44417f7-7093-4703-8e87-343dc3e0e32c',
      name: 'Buy Milk',
      assignedTo: 'Dave',
      description: 'Go to the store and buy milk',
      status: TodoStatus.New,
    },
    {
      id: '25b4a80c-2bf7-47c5-bb4f-a03496f3217c',
      name: 'Wash Car ',
      assignedTo: 'Dave',
      description: 'Wash and wax the car',
      status: TodoStatus.Abandoned,
    },
    {
      id: '8d3337be-db72-4f90-8f5a-55476231a153',
      name: 'Take Ethan to Dentist',
      assignedTo: 'Jennifer',
      description:
        'Take Ethan for scheduled appointment on the 12th of September',
      status: TodoStatus.New,
    },
    {
      id: '1fc5a9f5-e50f-47c6-babf-65673b42a3e2',
      name: 'Mow Lawn',
      assignedTo: 'Norman',
      description: 'Mow the lawn on Saturday',
      status: TodoStatus.New,
    },
    {
      id: '969624c6-d945-4fa2-a475-e0982416626d',
      name: 'By snacks',
      assignedTo: 'Dave',
      description: "Buy snacks for this weekend's barbecue",
      status: TodoStatus.New,
    },
  ];
}
