import React from 'react';
import MenuIcon from './MenuIcon';
import SignOut from './SignOut';

const Navigation = () => {
	return (
		<nav className='flex flex-col justify-center items-center h-full'>
			<div className='h-[20vh] py-4'>
				<MenuIcon />
				<SignOut />
			</div>
			<div className='mx-auto h-[80vh]'>hello</div>
		</nav>
	);
};

export default Navigation;
