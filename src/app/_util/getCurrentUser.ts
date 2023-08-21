import axios from 'axios';

export const fetchUserData = async () => {
	try {
		const response = await axios.get('http://localhost:3000/api/user');

		return response.data;
	} catch (error) {
		throw new Error('Failed to fetch user data');
	}
};
