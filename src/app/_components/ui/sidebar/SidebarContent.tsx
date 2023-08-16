'use client';

import React from 'react';
import Navigation from './Navigation';
import MenuContainer from './MenuContainer';
import UserContainer from './UserContainer';
import { useSidebar } from '@/app/_context/SidebarContext';

const SidebarContent = () => {
	const { isOpen } = useSidebar();

	return (
		<div
			className={`w-1/12 ${
				isOpen ? 'w-1/6' : ''
			} bg-stone-700 transition duration-300`}
		>
			<MenuContainer />
			<UserContainer />
			<Navigation />
		</div>
	);
};

export default SidebarContent;
