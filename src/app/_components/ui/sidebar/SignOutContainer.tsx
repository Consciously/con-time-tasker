import React from 'react';
import SignOutBtn from './SignOutBtn';

interface IProps {
	user: { id: string | null };
}

const SignOutContainer = ({ user }: IProps) => {
	return (
		<div className='h-[10vh] py-4'>
			<SignOutBtn user={user} />
		</div>
	);
};

export default SignOutContainer;
