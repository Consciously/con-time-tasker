'use client';
import { usePathname, redirect } from 'next/navigation';

const Redirection = () => {
	const pathname = usePathname();

	if (pathname === '/') redirect('/dashboard');

	return null;
};

export default Redirection;
