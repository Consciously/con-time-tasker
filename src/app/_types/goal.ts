import { Category, Priority } from './enums';
import { ITask } from '.';

export interface IGoal {
	_id: string;
	title: string;
	description: string;
	startDate: Date;
	endDate: Date;
	category: Category;
	priority: Priority;
	tags: string[];
	tasks: ITask[];
}
