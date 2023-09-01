import { defineType, defineField } from 'sanity';

const userSchema = defineType({
	name: 'user',
	title: 'User',
	type: 'document',
	fields: [
		defineField({ name: 'name', type: 'string' }),
		defineField({ name: 'email', type: 'string' }),
		defineField({ name: 'avatar', type: 'image' }),
	],
	preview: {
		select: { title: 'name', subtitle: 'email', media: 'avatar' },
	},
});

export default userSchema;
