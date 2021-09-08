import { Component, Input } from '@angular/core';
import { ITodo, TodoStatus } from '@todos-nx/data';

@Component({
  selector: 'todos-nx-todo-display-card',
  templateUrl: './todo-display-card.component.html',
  styleUrls: ['./todo-display-card.component.scss'],
})
export class TodoDisplayCardComponent {
  @Input() todo!: ITodo;

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