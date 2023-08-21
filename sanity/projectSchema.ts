type RuleType = {
	min: (value: Date) => RuleType;
	valueOfField: (fieldName: string) => Date;
	// ... any other methods or properties
};

const projectSchema = {
	name: 'project',
	type: 'document',
	fields: [
		{ name: 'title', type: 'string' },
		{ name: 'description', type: 'text' },
		{ name: 'startDate', type: 'date' },
		{
			name: 'endDate',
			type: 'date',
			validation: (Rule: RuleType) => Rule.min(Rule.valueOfField('startDate')),
		},
		{
			name: 'order',
			type: 'number',
			description:
				'Priority order for projects. Lower numbers are higher priority.',
		},
		{
			name: 'goals',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'goal' } }],
		},
		{ name: 'createdBy', type: 'reference', to: { type: 'user' } },
	],
	orderings: [
		{
			title: 'Start Date',
			name: 'startDateAsc',
			by: [{ field: 'startDate', direction: 'asc' }],
		},
		{
			title: 'Priority',
			name: 'priorityOrder',
			by: [{ field: 'order', direction: 'asc' }],
		},
	],
	preview: {
		select: { title: 'title', subtitle: 'description' },
	},
};

export default projectSchema;
