import { groq } from 'next-sanity';
import { client } from '@/lib/client';
import { IGoal } from '../_types';

export const getAllGoals = async (): Promise<IGoal[]> => {
	return client.fetch(
		groq`*[_type == "goal"]{
      _id,
      title,
      description,
      startDate,
      endDate,
      category,
      priority,
      tags,
    }`,
	);
};
