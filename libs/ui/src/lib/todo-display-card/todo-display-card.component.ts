import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo, ITodoView, TodoStatus } from '@todos-nx/data';

@Component({
  selector: 'todos-nx-todo-display-card',
  templateUrl: './todo-display-card.component.html',
  styleUrls: ['./todo-display-card.component.scss'],
})
export class TodoDisplayCardComponent {
  @Input() todo!: ITodoView;
  @Output() delete = new EventEmitter<string>();

  deleteTodo() {
    this.delete.emit(this.todo.id);
  }

  getStatusString(status: TodoStatus): string {
    switch (status) {
      case TodoStatus.New:
        return 'New';
      case TodoStatus.InProgress:
        return 'In Progress';

      case TodoStatus.Complete:
        return 'Complete';

      case TodoStatus.Abandoned:
        return 'Abandoned';

      default:
        return 'Unknown';
    }
  }
}
