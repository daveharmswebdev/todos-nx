import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITodoToCreate, TodoStatus } from '@todos-nx/data';

@Component({
  selector: 'todos-nx-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  formGroup: FormGroup = this.fb.group({
    name: null,
    assignedTo: null,
    description: null,
    status: TodoStatus.Unknown,
  });

  statuses: { value: number; viewValue: string }[] = [
    { value: TodoStatus.Unknown, viewValue: 'Unknown' },
    { value: TodoStatus.New, viewValue: 'New' },
    { value: TodoStatus.InProgress, viewValue: 'In Progress' },
    { value: TodoStatus.Complete, viewValue: 'Complete' },
    { value: TodoStatus.Abandoned, viewValue: 'Abandoned' },
  ];

  @Output() createTodo = new EventEmitter<ITodoToCreate>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  create() {
    this.createTodo.next(this.formGroup.value);
  }
}
