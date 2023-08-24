const projectSchema = {
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		{ name: 'title', type: 'string' },
		{ name: 'description', type: 'text' },
		{ name: 'startDate', type: 'datetime' },
		{ name: 'endDate', type: 'datetime' },
		{
			name: 'priority',
			type: 'string',
			options: { list: ['low', 'medium', 'high'] },
		},
		{
			name: 'category',
			type: 'string',
			options: { list: ['business/customer', 'business/own', 'private'] },
		},
		{
			name: 'assignedTo',
			type: 'reference',
			to: { type: 'user' },
		},
		{
			name: 'goals',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'goal' } }],
		},
	],
	preview: {
		select: { title: 'title', subtitle: 'description' },
	},
};

export default projectSchema;
