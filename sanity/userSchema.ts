const userSchema = {
	name: 'user',
	title: 'User',
	type: 'document',
	fields: [
		{ name: 'name', type: 'string' },
		{ name: 'email', type: 'string' },
		{ name: 'avatar', type: 'image' },
	],
	preview: {
		select: { title: 'name', subtitle: 'email', media: 'avatar' },
	},
};

export default userSchema;
