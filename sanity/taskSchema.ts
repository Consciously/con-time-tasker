const taskSchema = {
	name: 'task',
	title: 'Task',
	type: 'document',
	fields: [
		{ name: 'title', type: 'string' },
		{ name: 'description', type: 'text' },
		{ name: 'startTime', type: 'datetime' },
		{ name: 'endTime', type: 'datetime' },
		{
			name: 'priority',
			type: 'string',
			options: { list: ['low', 'medium', 'high'] },
		},
	],
	preview: {
		select: { title: 'title', subtitle: 'description' },
	},
};

export default taskSchema;
