import React from 'react';
import Logo from './Logo';
import { oxanium } from '@/app/(site)/fonts';
import UserInfo from './UserInfo';

const Header = () => {
	return (
		<header className='flex bg-stone-900 p-4 justify-between items-center h-[20vh]'>
			<Logo />
			<div>
				<h1
					className={`${oxanium.className} text-8xl font-extralight text-center text-transparent bg-orange-gradient-right bg-clip-text`}
				>
					Time Tasker
				</h1>
			</div>
			<UserInfo />
		</header>
	);
};

export default Header;
