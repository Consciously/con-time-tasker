'use client';

import { useEffect } from 'react';
import { usePathname, redirect } from 'next/navigation';
import { useSidebar } from '../_context/SidebarContext';

const Redirection = () => {
	const { user } = useSidebar();

	const pathname = usePathname();

	useEffect(() => {
		if (user && user.id) {
			redirect('/dashboard/monthly');
		} else if (!user) {
			redirect('/auth/sign-in');
		} else {
			return;
		}
	}, [pathname, user]);

	return null;
};

export default Redirection;
