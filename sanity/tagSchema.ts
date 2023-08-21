const tagSchema = {
	name: 'tag',
	type: 'document',
	fields: [
		{ name: 'name', type: 'string' },
		{ name: 'description', type: 'text', description: 'Brief about this tag.' },
	],
	preview: {
		select: { title: 'name', subtitle: 'description' },
	},
};

export default tagSchema;
