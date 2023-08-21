const taskSchema = {
	name: 'task',
	type: 'document',
	fields: [
		{ name: 'title', type: 'string' },
		{ name: 'description', type: 'text' },
		{
			name: 'date',
			type: 'date',
			initialValue: () => new Date().toISOString(),
		},
		{ name: 'startTime', type: 'datetime' },
		{ name: 'endTime', type: 'datetime' },
		{
			name: 'order',
			type: 'number',
			description: 'Priority order for tasks within a goal.',
		},
		{
			name: 'steps',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						{ name: 'description', type: 'text' },
						{ name: 'isCompleted', type: 'boolean', default: false },
						{
							name: 'estimatedDuration',
							type: 'number',
							description: 'Estimated time in minutes',
						},
					],
				},
			],
		},
		{
			name: 'tags',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'tag' } }],
			description: 'Categories or context for this task.',
		},
	],
	preview: {
		select: { title: 'title', subtitle: 'description' },
	},
};

export default taskSchema;
