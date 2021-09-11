import { TodoStatus } from '..';

export interface ITodoView {
  id: string;
  name: string;
  assignedTo: string;
  description: string;
  status: TodoStatus;
}
