import React from 'react';
import Image from 'next/image';
import logoSvg from '@/images/logo.svg';

const Logo = () => {
	return (
		<div>
			<Image src={logoSvg} alt='Time Tasker' width={100} height={100} />
		</div>
	);
};

export default Logo;
