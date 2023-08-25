import { defineType, defineField } from 'sanity';

const tagSchema = defineType({
	name: 'tag',
	type: 'document',
	fields: [
		defineField({ name: 'name', type: 'string' }),
		defineField({
			name: 'description',
			type: 'text',
			description: 'Brief about this tag.',
		}),
	],
	preview: {
		select: { title: 'name', subtitle: 'description' },
	},
});

export default tagSchema;
