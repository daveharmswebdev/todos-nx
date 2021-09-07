import { TodoStatus } from './ITodoStatus';

export interface ITodo {
  id: string;
  name: string;
  assignedTo: string;
  description: string;
  status: TodoStatus;
}
