import { IPerson } from '..';
import { TodoStatus } from './ITodoStatus';

export interface ITodoToCreate {
  name: string;
  assignedTo: IPerson;
  description: string;
  status: TodoStatus;
}
