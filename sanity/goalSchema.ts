import { defineType, defineField, defineArrayMember } from 'sanity';

const goalSchema = defineType({
	name: 'goal',
	title: 'Goal',
	type: 'document',
	fields: [
		defineField({ name: 'title', type: 'string' }),
		defineField({ name: 'description', type: 'text' }),
		defineField({ name: 'startDate', type: 'date' }),
		defineField({ name: 'endDate', type: 'date' }),
		defineField({
			name: 'priority',
			type: 'string',
			options: { list: ['low', 'medium', 'high'] },
		}),
		defineField({ name: 'tags', type: 'array', of: [{ type: 'string' }] }),
		defineField({
			name: 'tasks',
			type: 'array',
			of: [defineArrayMember({ type: 'reference', to: { type: 'task' } })],
		}),
	],
	preview: {
		select: { title: 'title', subtitle: 'description' },
	},
});

export default goalSchema;
