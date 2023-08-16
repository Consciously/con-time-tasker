'use client';

import { useSidebar } from '@/app/_context/SidebarContext';

const MenuIcon = () => {
	const { isOpen, toggleOpen } = useSidebar();

	const handleMenuIcon = () => {
		toggleOpen();
	};

	return (
		<div
			className='w-14 h-14 border-2 border-orange-600 rounded-md mx-auto shadow-lg'
			onClick={handleMenuIcon}
		>
			<div className='flex flex-col justify-center items-center h-full w-full'>
				<div
					className={`w-8 h-1 bg-orange-600 transform transition-transform duration-300 ease-in-out ${
						isOpen ? 'origin-center translate-y-1 rotate-45' : 'mb-2'
					}`}
				></div>
				<div
					className={`w-8 h-1 bg-orange-600 transform transition-transform duration-300 ease-in-out ${
						isOpen ? 'opacity-0' : ''
					}`}
				></div>
				<div
					className={`w-8 h-1 bg-orange-600 transform transition-transform duration-300 ease-in-out ${
						isOpen ? 'origin-center -translate-y-1 -rotate-45' : 'mt-2'
					}`}
				></div>
			</div>
		</div>
	);
};

export default MenuIcon;
