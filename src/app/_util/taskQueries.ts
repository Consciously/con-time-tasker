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

// Get projects by month
export const getProjectsByMonth = async (
	monthStart: Date,
	monthEnd: Date,
): Promise<IProject[]> => {
	return client.fetch(
		groq`*[_type == "project" && startDate >= $monthStart && endDate <= $monthEnd]{
      _id,
      title,
      description,
      startDate,
      endDate,
      category,
      priority,
      status
    }`,
		{ monthStart, monthEnd },
	);
};

// get projects by category
export const getProjectsByCategory = async (
	category: string,
): Promise<IProject[]> => {
	return client.fetch(
		groq`*[_type == "project" && category == $category]{
      _id,
      title,
      description,
      startDate,
      endDate,
      category,
      priority,
      status
    }`,
		{ category },
	);
};
