'use client';

import Navigation from './Navigation';
import MenuContainer from './MenuContainer';
import SignOutContainer from './SignOutContainer';
import { useSidebar } from '@/app/_context/SidebarContext';

interface IProps {
	user: { id: string | null };
}

const Sidebar = ({ user }: IProps) => {
	const { isOpen } = useSidebar();

	return (
		<div
			className={`${isOpen ? 'w-[20vw]' : 'w-[5vw]'} transition duration-300`}
		>
			<MenuContainer />
			<SignOutContainer user={user} />
			<Navigation user={user} />
		</div>
	);
};

export default Sidebar;
