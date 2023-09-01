import React from 'react';
import { SignOutButton } from '@clerk/nextjs';
import { FaSignOutAlt } from 'react-icons/fa';

interface IProps {
	user: { id: string | null };
}

const SignOutBtn = ({ user }: IProps) => {
	return (
		<div className='w-14 h-14 mx-auto text-center'>
			{user && user.id && (
				<SignOutButton>
					<button className='p-4 text-center text-xl rounded-full shadow-lg text-orange-600 border-2 border-orange-600'>
						<FaSignOutAlt />
					</button>
				</SignOutButton>
			)}
		</div>
	);
};

export default SignOutBtn;
