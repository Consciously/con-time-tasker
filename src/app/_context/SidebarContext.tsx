'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { currentUser } from '@clerk/nextjs';
import { fetchUserData } from '@/app/_util/getCurrentUser';

type User = ReturnType<typeof currentUser> extends Promise<infer U> ? U : never;

interface ISidebarContext {
	isOpen: boolean;
	toggleOpen: () => void;
	user: User;
}

interface IProps {
	children: React.ReactNode;
}

const SidebarContext = createContext<ISidebarContext | undefined>(undefined);

const SidebarProvider = ({ children }: IProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [user, setUser] = useState<User>(null);

	useEffect(() => {
		const fetchData = async () => {
			const user = await fetchUserData();

			setUser(user);
		};

		fetchData();
	}, []);

	const toggleOpen = () => setIsOpen(prevState => !prevState);

	return (
		<SidebarContext.Provider value={{ isOpen, toggleOpen, user }}>
			{children}
		</SidebarContext.Provider>
	);
};

const useSidebar = () => {
	const context = useContext(SidebarContext);

	if (!context)
		throw new Error('useSidebar must be used within a SidebarProvider');

	return context;
};

export { SidebarProvider, useSidebar };
