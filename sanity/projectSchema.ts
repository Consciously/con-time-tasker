import { defineType, defineField, defineArrayMember } from 'sanity';

const projectSchema = defineType({
	name: 'project',
	title: 'Project',
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
		defineField({
			name: 'category',
			type: 'string',
			options: { list: ['customer', 'own', 'private'] },
		}),
		defineField({
			name: 'assignedTo',
			title: 'Assigned To',
			type: 'reference',
			to: { type: 'user' },
		}),
		defineField({
			name: 'goals',
			title: 'Title',
			type: 'array',
			of: [defineArrayMember({ type: 'reference', to: { type: 'goal' } })],
		}),
	],
	preview: {
		select: { title: 'title', subtitle: 'description' },
	},
});

export default projectSchema;
