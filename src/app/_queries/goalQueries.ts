import { groq } from 'next-sanity';
import { client } from '@/lib/client';
import { validateWorkWeekDates } from '../_util/validateWorkWeekDates';
import { IGoal } from '../_types';

// get all goals
export const getAllGoals = async (): Promise<IGoal[]> => {
	return client.fetch(
		groq`*[_type == "goal"]{
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
      },
    }`,
	);
};

// get goals for a specific time range
export const getGoalsByTimeRange = async (
	startDate: Date,
	endDate: Date,
): Promise<IGoal[]> => {
	return client.fetch(
		groq`*[_type == "goal" && startDate >=$startDate && endDate <= $endDate]{
      _id,
      title,
      description,
      startDate,
      endDate,
      category,
      priority,
      tags,
      "project": *[_type == 'project' && references(^._id)]{
        _id,
        title
      }
    }`,
		{ startDate, endDate },
	);
};

// get goals for a specific week
export const getGoalsByWeek = async (
	startOfWeek: Date,
	endOfWeek: Date,
): Promise<IGoal[]> => {
	validateWorkWeekDates(startOfWeek, endOfWeek);

	return client.fetch(
		groq`*[_type == "goal" && startDate >= $startOfWeek && endDate <= $endOfWeek]{
      _id,
      title,
      description,
      startDate,
      endDate,
      category,
      priority,
      tags,
      "project": *[_type == 'project' && references(^._id)]{
        _id,
        title
    }`,
		{ startOfWeek, endOfWeek },
	);
};

// get goals by priority
export const getGoalsByPriority = async (
	priority: string,
): Promise<IGoal[]> => {
	return client.fetch(
		groq`*[_type == "goal" && priority == $priority]{
      _id,
      title,
      description,
      startDate,
      endDate,
      category,
      priority,
      tags,
      "project": *[_type == 'project' && references(^._id)]{
        _id,
        title
    }`,
		{ priority },
	);
};

// get goals by tags
export const getGoalsByTags = async (tags: string[]): Promise<IGoal[]> => {
	return client.fetch(
		groq`*[_type == "goal" && tags == $tags]{
      _id,
      title,
      description,
      startDate,
      endDate,
      category,
      priority,
      tags,
      "project": *[_type == 'project' && references(^._id)]{
        _id,
        title
    }`,
		{ tags },
	);
};

// get goals by id
export const getGoalById = async (goalId: string): Promise<IGoal> => {
	return client.fetch(
		groq`*[_type == "goal" && _id == $goalId]{
      _id,
      title,
      description,
      startDate,
      endDate,
      category,
      priority,
      tags,
      "project": *[_type == 'project' && references(^._id)]{
        _id,
        title
    }[0]`,
		{ goalId },
	);
};
