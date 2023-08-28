import { groq } from 'next-sanity';
import { client } from '@/lib/client';
import { ITag } from '../_types';

// get all tags
export const getAllTasks = async (): Promise<ITag[]> => {
	return client.fetch(
		groq`*[_type == "tag"]{
      _id,
      title,
    }`,
	);
};
