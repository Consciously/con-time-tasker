import '../globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { nunito } from './fonts';
import Header from '../_components/ui/header/Header';
import Sidebar from '../_components/ui/sidebar/Sidebar';
import { SidebarProvider } from '../_context/SidebarContext';
import { oxanium } from '@/app/(site)/fonts';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const appearanceObj = {
		elements: {
			card: 'bg-stone-900 p-8',
			headerTitle: `${oxanium.className} text-transparent text-4xl bg-orange-gradient-right bg-clip-text font-semibold`,
			headerSubtitle: 'hidden',
			formHeaderTitle: 'text-2xl text-orange-600 font-semibold',
			formHeaderSubtitle: 'text-base text-stone-300',
			identityPreviewText: 'text-base text-stone-300',
			identityPreviewEditButton: 'text-orange-600',
			otpCodeFieldInput:
				'text-stone-300 border-stone-300 focus:border-orange-600',
			formResendCodeLink: 'text-orange-600 font-semibold',
			formFieldLabel: 'text-stone-300 font-semibold',
			formFieldInput: 'text-stone 900 font-semibold',
			formButtonPrimary: 'text-base bg-orange-600 text-stone-900 font-semibold',
			footerActionText: 'text-base text-stone-300 font-semibold',
			footerActionLink: 'text-base text-orange-600 font-semibold',
		},
	};

	return (
		<ClerkProvider appearance={appearanceObj}>
			<SidebarProvider>
				<html lang='en'>
					<body className={nunito.className}>
						<div className='flex h-screen w-screen'>
							<Sidebar />
							<div className='w-[95vw]'>
								<Header />
								<main>{children}</main>
							</div>
						</div>
					</body>
				</html>
			</SidebarProvider>
		</ClerkProvider>
	);
}
