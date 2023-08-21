const userSchema = {
	name: 'user',
	type: 'document',
	fields: [
		{ name: 'name', type: 'string' },
		{ name: 'email', type: 'email' },
		{ name: 'avatar', type: 'image' },
	],
	preview: {
		select: { title: 'name', subtitle: 'email', media: 'avatar' },
	},
};

export default userSchema;
