import { groq } from 'next-sanity';
import { client } from '@/lib/client';
import { IProject } from '../_types';

// Get all projects
export const getAllProjects = async (): Promise<IProject[]> => {
	return client.fetch(
		groq`*[_type == "project"]{
      _id,
      title,
      description,
      startDate,
      endDate,
      category,
      priority,
      status
    }`,
	);
};
