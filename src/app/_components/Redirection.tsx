'use client';

import { useEffect } from 'react';
import { usePathname, redirect } from 'next/navigation';

const Redirection = () => {
	const pathname = usePathname();

	useEffect(() => {
		if (pathname === '/') redirect('/dashboard');
	}, [pathname]);

	return null;
};

export default Redirection;
