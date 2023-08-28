import { currentUser } from '@clerk/nextjs';

export const GET = async (request: Request) => {
	try {
		const user = await currentUser();

		if (!user) {
			return new Response(JSON.stringify({ errorMsg: 'No user found' }), {
				status: 401,
			});
		}

		return new Response(JSON.stringify({ data: user }), {
			status: 200,
		});
	} catch (error) {
		return new Response(null, {
			status: 500,
			statusText: 'Internal Server Error',
		});
	}
};
