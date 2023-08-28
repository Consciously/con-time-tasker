import React from 'react';
import ContentInfoContainer from '@/app/_components/ui/main/ContentInfoContainer';
import ContentSidebarContainer from '@/app/_components/ui/main/ContentSidebarContainer';

interface IProps {
	children: React.ReactNode;
}

const MainLayout = ({ children }: IProps) => {
	return (
		<div className='grid grid-cols-6 gap-4 p-4 bg-stone-300 h-[80vh]'>
			<div className='flex flex-col gap-y-4	 col-span-1'>
				<ContentInfoContainer />
				<ContentSidebarContainer />
			</div>
			<div className='col-span-5 bg-stone-900 rounded-md'>Main Table</div>
		</div>
	);
};

export default MainLayout;
