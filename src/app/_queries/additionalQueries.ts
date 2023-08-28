import { groq } from 'next-sanity';
import { client } from '@/lib/client';
import { IProject, IGoal, ITask } from '../_types';

// get all projects assigned to a specific user
export const getAllProjectsByUser = async (
	user: string,
): Promise<IProject[]> => {
	return client.fetch(
		groq`*[_type == "project" && assignedTo-> name == $user]{
      _id,
      title,
      description,
      startDate,
      endDate,
      category,
      priority,
      "assigned to": assignedTo->,
    }`,
		{ user },
	);
};

// get all goals assigned to a specific project
export const getAllGoalsByProject = async (
	projectId: string,
): Promise<IGoal[]> => {
	return client.fetch(
		groq`*[_type == "goal" && _id in *[_type == "project" && _id == $projectId].goal[]._ref]{
      _id,
      title,
      description,
      startDate,
      endDate,
      priority,
      tags[]->{
        _id,
        title
      },
      "project": *[_type == 'project' && references(^._id)]{
        _id,
        title
      }
    }`,
		{ projectId },
	);
};

// get all tasks assigned to a specific goal
export const getAllTasksByGoal = async (goalId: string): Promise<ITask[]> => {
	return client.fetch(
		groq`*[_type == "task" && _id in *[_type == "goal" && _id == $goalId].task[]._ref]{
      _id,
      title,
      description,
      status,
      priority,
      duedate,
      "goal": *[_type == "goal" && references(^._id)]{
        _id,
        title
      }
    }`,
		{ goalId },
	);
};

// get all tasks for today
export const getAllTasksForToday = async (today: string): Promise<ITask[]> => {
	return client.fetch(
		groq`*[_type == "task" && duetime == $today]{
      _id,
      title,
      description,
      status,
      priority,
      duedate,
      "goal": *[_type == "goal" && references(^._id)]{
        _id,
        title
      }
    }`,
		{ today },
	);
};
