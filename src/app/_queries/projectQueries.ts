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
      "assigned to": assignedTo->,
    }`,
	);
};

// Get projects by month
export const getProjectsByTimeRange = async (
	startDate: Date,
	endDate: Date,
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
      "assigned to": assignedTo->,
    }`,
		{ startDate, endDate },
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
      "assigned to": assignedTo->,
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
      priority,
      "assigned to": assignedTo->,
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
      "assignedTo": assignedTo->,
      "goals": goal[]->{
        _id,
        title,
        description,
        startDate,
        endDate,
        priority,
        tags,
        "tasks": task[]->{
          _id,
          title,
          description,
          status,
          priority,
          duetime
        }
      }
    }[0]`,
		{ projectId },
	);
};
