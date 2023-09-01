import React from 'react';
import { oxanium } from '@/app/(site)/fonts';
import { LuClipboardList, LuFlag, LuClipboardCheck, LuX } from 'react-icons/lu';
import { IoCheckmark } from 'react-icons/io5';
import { currentUser } from '@clerk/nextjs';

const UserInfo = async () => {
	type User = ReturnType<typeof currentUser> extends Promise<infer U>
		? U
		: never;

	const user: User | null = await currentUser();

	const plainUser = {
		id: user && user.id,
		firstName: user?.firstName,
	};

	return (
		<div className='flex flex-col justify-items-center items-center bg-orange-gradient-right rounded-md p-1 max-w-sm'>
			<div className='bg-stone-900 p-4'>
				<h3
					className={`${oxanium.className} text-4xl text-stone-300 text-center font-semibold mb-2`}
				>
					Hey{' '}
					{!plainUser.id ? (
						<span>Dude!</span>
					) : (
						<span>{plainUser.firstName}</span>
					)}
				</h3>
				<p
					className={`${oxanium.className} text-base text-stone-300 font-semibold text-center mt-2`}
				>
					{!plainUser.id ? (
						<span>You have to sign in or sign up</span>
					) : (
						<>
							<span className='inline-flex text-base font-semibold text-stone-300 justify-between w-full'>
								<LuClipboardList />
								<LuFlag />
								<LuClipboardCheck />
								<IoCheckmark />
								<LuX />
							</span>
							<span className='inline-flex text-base text-orange-600 justify-between w-full'>
								<i className='not-italic'>1</i>
								<i className='not-italic'>0</i>
								<i className='not-italic'>0</i>
								<i className='not-italic'>0</i>
								<i className='not-italic'>0</i>
							</span>
						</>
					)}
				</p>
			</div>
		</div>
	);
};

export default UserInfo;
