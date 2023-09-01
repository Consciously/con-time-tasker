import { type SchemaTypeDefinition } from 'sanity';
import projectSchema from './projectSchema';
import tagSchema from './tagSchema';
import userSchema from './userSchema';
import taskSchema from './taskSchema';
import goalSchema from './goalSchema';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [userSchema, projectSchema, goalSchema, taskSchema, tagSchema],
};
