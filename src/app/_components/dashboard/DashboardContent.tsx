'use client';

import React from 'react';
import { redirect, usePathname } from 'next/navigation';

const DashboardContent = () => {
	const pathname = usePathname();

	if (pathname === '/') {
		redirect('/dashboard');
	}
	return <div>DashboardContent</div>;
};

export default DashboardContent;
