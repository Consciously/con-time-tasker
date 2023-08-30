'use client';

import { useEffect } from 'react';
import { usePathname, redirect } from 'next/navigation';

interface IProps {
	user: { id: string | null };
}

const Redirection = ({ user }: IProps) => {
	const pathname = usePathname();

	useEffect(() => {
		if (!user && pathname === '/') {
			redirect('/auth/sign-in');
		} else if (user && user.id && pathname === '/') {
			redirect('/dashboard/monthly');
		} else {
			return;
		}
	}, [pathname, user]);

	return <div>Hello World</div>;
};

export default Redirection;
