import { groq } from 'next-sanity';
import { client } from '@/lib/client';
import { ITask } from '../_types';

// get all tasks
export const getAllTasks = async (): Promise<ITask[]> => {
	return client.fetch(
		groq`*[_type == "task"]{
      _id,
      title,
      description,
      status,
      priority,
      duetime,
      "goal": *[_type == "goal" && references(^._id)]{
        _id,
        title
      }
    }`,
	);
};

// get all tasks by status

export const getTasksByStatus = async (status: string): Promise<ITask[]> => {
	return client.fetch(
		groq`*[_type == "task" && status == $status]{
      _id,
      title,
      description,
      status,
      priority,
      duetime,
      "goal": *[_type == "goal" && references(^._id)]{
        _id,
        title
      }
    }`,
		{ status },
	);
};

// get all tasks by priority
export const getTasksByPriority = async (
	priority: string,
): Promise<ITask[]> => {
	return client.fetch(
		groq`*[_type == "task" && priority == $priority]{
      _id,
      title,
      description,
      status,
      priority,
      duetime,
      "goal": *[_type == "goal" && references(^._id)]{
        _id,
        title
      }
    }`,
		{ priority },
	);
};

// get all tasks by due date
export const getTasksByDuedate = async (duedate: string): Promise<ITask[]> => {
	return client.fetch(
		groq`*[_type == "task" && duedate == $duedate]{
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
		{ duedate },
	);
};
