import React from 'react';
import Sidebar from './Sidebar';
import { currentUser } from '@clerk/nextjs';

const SidebarContainer = async () => {
	type User = ReturnType<typeof currentUser> extends Promise<infer U>
		? U
		: never;

	const user: User | null = await currentUser();

	const plainUser = {
		id: user && user.id,
	};

	return (
		<div className='bg-stone-700'>
			<Sidebar user={plainUser} />
		</div>
	);
};

export default SidebarContainer;
