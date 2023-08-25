import { defineType, defineField, defineArrayMember } from 'sanity';

const goalSchema = defineType({
	name: 'goal',
	title: 'Goal',
	type: 'document',
	fields: [
		defineField({ name: 'title', title: 'Title', type: 'string' }),
		defineField({ name: 'description', title: 'Description', type: 'text' }),
		defineField({ name: 'startDate', title: 'Start Date', type: 'date' }),
		defineField({ name: 'endDate', title: 'End Date', type: 'date' }),
		defineField({
			name: 'priority',
			title: 'Priority',
			type: 'string',
			options: { list: ['low', 'medium', 'high'] },
		}),
		defineField({
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{ type: 'string' }],
		}),
		defineField({
			name: 'tasks',
			title: 'Tasks',
			type: 'array',
			of: [defineArrayMember({ type: 'reference', to: { type: 'task' } })],
		}),
	],
	preview: {
		select: { title: 'title', subtitle: 'description' },
	},
});

export default goalSchema;
