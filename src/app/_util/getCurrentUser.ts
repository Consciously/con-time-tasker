import axios from 'axios';
import { currentUser } from '@clerk/nextjs';
import { BASE_URL } from './baseUrl';

type User = ReturnType<typeof currentUser> extends Promise<infer U> ? U : never;

export const fetchUserData = async (): Promise<User> => {
	try {
		// Make the API request
		const response = await axios.get(`http://localhost:3000/api/user`);

		// Axios will throw an error for bad status codes, so no need to check response.ok
		const { user } = response.data;

		return user;
	} catch (error) {
		// Log any errors that occur during the fetch or parsing process
		console.error('Fetch failed: ', error);
		throw error;
	}
};
