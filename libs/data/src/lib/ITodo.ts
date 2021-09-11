import { IPerson } from '..';
import { TodoStatus } from './ITodoStatus';

export interface ITodo {
  id: string;
  name: string;
  assignedTo: IPerson;
  description: string;
  status: TodoStatus;
}
