import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';

export default authMiddleware({
	afterAuth(auth, req, evt) {
		if (!auth.userId && !auth.isPublicRoute) {
			return redirectToSignIn({ returnBackUrl: req.url });
		}
	},
	publicRoutes: ['/'],
});

export const config = {
	matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
