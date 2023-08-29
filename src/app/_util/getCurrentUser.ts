export const fetchUserData = async () => {
	try {
		const response = await fetch('api/user');
		const { user } = await response.json();

		return user;
	} catch (error) {
		throw new Error('Failed to fetch user data');
	} finally {
		return;
	}
};
