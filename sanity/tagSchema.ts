import { defineType, defineField } from 'sanity';

const tagSchema = defineType({
	name: 'tag',
	type: 'document',
	fields: [defineField({ name: 'title', title: 'Title', type: 'string' })],
	preview: {
		select: { title: 'title' },
	},
});

export default tagSchema;
