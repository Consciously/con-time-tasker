import { Category, Priority } from './enums';
import { IGoal } from '.';

export interface IProject {
	_id: string;
	title: string;
	description: string;
	startDate: Date;
	endDate: Date;
	category: Category;
	priority: Priority;
	goals: IGoal[];
}
