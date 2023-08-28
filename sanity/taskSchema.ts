import { defineType, defineField } from 'sanity';

const taskSchema = defineType({
	name: 'task',
	title: 'Task',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'string',
		}),
		defineField({
			name: 'status',
			title: 'Status',
			type: 'string',
			options: {
				list: ['Not Started', 'In Progress', 'Completed'],
			},
		}),
		defineField({
			name: 'priority',
			title: 'Priority',
			type: 'string',
			options: {
				list: ['Low', 'Medium', 'High'],
			},
		}),
		defineField({
			name: 'duedate',
			title: 'Due Date',
			type: 'date',
			options: {
				dateFormat: 'YYYY-MM-DD',
			},
		}),
	],
	preview: {
		select: { title: 'title', subtitle: 'description' },
	},
});

export default taskSchema;
