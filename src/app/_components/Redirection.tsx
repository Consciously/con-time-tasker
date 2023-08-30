'use client';

import { useEffect } from 'react';
import { usePathname, redirect } from 'next/navigation';

interface IProps {
	user: { id: string | null };
}

const Redirection = ({ user }: IProps) => {
	const pathname = usePathname();

	useEffect(() => {
		if (user.id && pathname === '/') {
			redirect('/dashboard/monthly');
		} /*  else if (!user.id && pathname === '/') {
			redirect('/auth/sign-in');
		} else {
			return;
		} */
	}, [pathname, user]);

	return <></>;
};

export default Redirection;
