const taskSchema = {
	name: 'task',
	title: 'Task',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'string',
		},
		{
			name: 'status',
			title: 'Status',
			type: 'string',
			options: {
				list: ['Not Started', 'In Progress', 'Completed'],
			},
		},
		{
			name: 'priority',
			title: 'Priority',
			type: 'string',
			options: {
				list: ['low', 'medium', 'high'],
			},
		},
		{
			name: 'duetime',
			title: 'Due Date',
			type: 'date',
			options: {
				dateFormat: 'YYYY-MM-DD',
			},
		},
	],
	preview: {
		select: { title: 'title', subtitle: 'description' },
	},
};

export default taskSchema;
