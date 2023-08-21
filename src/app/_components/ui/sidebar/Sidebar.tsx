'use client';

import Navigation from './Navigation';
import MenuContainer from './MenuContainer';
import SignOutContainer from './SignOutContainer';
import { useSidebar } from '@/app/_context/SidebarContext';

const Sidebar = () => {
	const { isOpen } = useSidebar();

	return (
		<div
			className={`w-1/12 ${
				isOpen ? 'w-1/6' : ''
			} bg-stone-700 transition duration-300`}
		>
			<MenuContainer />
			<SignOutContainer />
			<Navigation />
		</div>
	);
};

export default Sidebar;
