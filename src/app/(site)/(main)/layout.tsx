import React from 'react';

interface IProps {
	children: React.ReactNode;
}

const MainLayout = ({ children }: IProps) => {
	return <div className='h-[80vh] bg-stone-300'>{children}</div>;
};

export default MainLayout;
