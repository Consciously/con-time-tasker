import React from 'react';
import Link from 'next/link';
import { LuClipboardList, LuFlag, LuClipboardCheck } from 'react-icons/lu';

const Navigation = () => {
	return (
		<nav className='flex flex-col justify-center items-center h-[80vh]'>
			<ul className='mx-auto flex flex-col space-y-8'>
				<li className='text-orange-600 border-2 border-orange-600 rounded-full p-4 w-14 h-14 flex justify-center items-center shadow-lg'>
					<Link href='/dashboard/daily' className='text-4xl font-extralight'>
						<LuClipboardList />
					</Link>
				</li>
				<li className='text-orange-600 border-2 border-orange-600 rounded-full p-4 w-14 h-14 flex justify-center items-center shadow-lg'>
					<Link href='/dashboard/weekly' className='text-4xl font-extralight'>
						<LuFlag />
					</Link>
				</li>
				<li className='text-orange-600 border-2 border-orange-600 rounded-full p-4 w-14 h-14 flex justify-center items-center shadow-lg'>
					<Link href='/dashboard/monthly' className='text-4xl font-extralight'>
						<LuClipboardCheck />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
