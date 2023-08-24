const goalSchema = {
	name: 'goal',
	title: 'Goal',
	type: 'document',
	fields: [
		{ name: 'title', type: 'string' },
		{ name: 'description', type: 'text' },
		{ name: 'startDate', type: 'date' },
		{ name: 'endDate', type: 'date' },
		{
			name: 'priority',
			type: 'string',
			options: { list: ['low', 'medium', 'high'] },
		},
		{ name: 'tags', type: 'array', of: [{ type: 'string' }] },
		{
			name: 'tasks',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'task' } }],
		},
	],
	preview: {
		select: { title: 'title', subtitle: 'description' },
	},
};

export default goalSchema;
