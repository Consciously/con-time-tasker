import React from 'react';
import { SignOutButton, currentUser } from '@clerk/nextjs';
import { FaSignOutAlt } from 'react-icons/fa';

const SignOut = async () => {
	const user = await currentUser();

	return (
		<div className='w-14 h-14 mx-auto text-center'>
			{user?.id && (
				<SignOutButton>
					<button className='p-4 text-center text-xl rounded-full shadow-lg text-orange-600 border-2 border-orange-600'>
						<FaSignOutAlt />
					</button>
				</SignOutButton>
			)}
		</div>
	);
};

export default SignOut;
