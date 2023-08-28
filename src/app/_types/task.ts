import { Priority, Status } from './enums';

export interface ITask {
	_id: string;
	title: string;
	description: string;
	dueDate?: Date;
	priority: Priority;
	status: Status;
}
