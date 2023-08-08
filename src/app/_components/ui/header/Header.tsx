import React from 'react';
import { nunito, oxanium } from '@/app/(site)/fonts';
import Logo from './Logo';

const Header = () => {
	return (
		<header
			className={`${nunito.className} flex bg-stone-900 p-4 justify-between items-center h-[20vh]`}
		>
			<Logo />
			<div>
				<h1
					className={`${oxanium.className} text-8xl font-extralight text-center text-transparent bg-orange-gradient-right bg-clip-text`}
				>
					Time Tasker
				</h1>
			</div>
			<div className='flex flex-col justify-items-center items-center bg-orange-gradient-right rounded-md p-1 max-w-sm'>
				<div className='bg-stone-900 p-4'>
					<h3
						className={`${oxanium.className} text-4xl text-stone-300 text-center font-semibold mb-2`}
					>
						Hey Dude!
					</h3>
					<p
						className={`${oxanium.className} text-base text-stone-300 font-semibold text-center mt-2`}
					>
						You have to
					</p>
					<p
						className={`${oxanium.className} text-base text-stone-300 font-semibold text-center mt-2`}
					>
						sign in or sign up!
					</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
