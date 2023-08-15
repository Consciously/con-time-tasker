import React from 'react';
import Navigation from './Navigation';
import MenuContainer from './MenuContainer';
import UserContainer from './UserContainer';

const Sidebar = () => {
	return (
		<div className='w-1/12 bg-stone-700'>
			<MenuContainer />
			<UserContainer />
			<Navigation />
		</div>
	);
};

export default Sidebar;
