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
      "goals": goals[]{
        goals->
      }
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
      status,
      goals->{
        _id,
        title,
        description,
        startDate,
        endDate,
        category,
        priority,
        tags,
        tasks
      }
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
      priority
    }`,
		{ category },
	);
};

// get projects by priority
export const getProjectsByPriority = async (
	priority: string,
): Promise<IProject[]> => {
	return client.fetch(
		groq`*[_type == "project" && priority == $priority]{
      _id,
      title,
      description,
      startDate,
      endDate,
      category,
      priority
    }`,
		{ priority },
	);
};

// get projects by id
export const getProjectById = async (
	projectId: string,
): Promise<IProject | null> => {
	return client.fetch(
		groq`*[_type == "project" && _id == $projectId]{
      _id,
      title,
      description,
      startDate,
      endDate,
      category,
      priority,
    }[0]`, // Retrieve the first (and only) match
		{ projectId },
	);
};
