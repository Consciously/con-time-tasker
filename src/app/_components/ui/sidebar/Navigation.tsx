import React from 'react';
import MenuIcon from './MenuIcon';
import { SignOutButton } from '@clerk/nextjs';

const Navigation = () => {
	return (
		<nav className='my-4'>
			<MenuIcon />
			<div>
				<SignOutButton />
			</div>
			<div></div>
		</nav>
	);
};

export default Navigation;
