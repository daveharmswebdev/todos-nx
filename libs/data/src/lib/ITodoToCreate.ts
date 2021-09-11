import { TodoStatus } from './ITodoStatus';

export interface ITodoToCreate {
  name: string;
  assignedTo: string;
  description: string;
  status: TodoStatus;
}
