import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export const GET = async () => {
	const { user } = auth();
	if (!user) {
		return new Response('Unauthorized', { status: 401 });
	}

	return NextResponse.json({ user });
};
