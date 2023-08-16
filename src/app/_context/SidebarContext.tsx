'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { currentUser } from '@clerk/nextjs';

type User = ReturnType<typeof currentUser> extends Promise<infer U> ? U : never;

interface ISidebarContext {
	isOpen: boolean;
	toggleOpen: () => void;
	user: User | null;
}

interface IProps {
	children: React.ReactNode;
}

const SidebarContext = createContext<ISidebarContext | undefined>(undefined);

const SidebarProvider = ({ children }: IProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [user, setUser] = useState<User | null>(null);

	const toggleOpen = () => setIsOpen(prevState => !prevState);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const userData = await currentUser();
				setUser(userData);
			} catch (error) {
				console.error('Failed to fetch user:', error);
			}
		};

		fetchUser();
	}, []);

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
