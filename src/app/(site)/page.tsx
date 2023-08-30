import Redirection from '../_components/Redirection';
import { currentUser } from '@clerk/nextjs';

const HomePage = async () => {
	type User = ReturnType<typeof currentUser> extends Promise<infer U>
		? U
		: never;

	const user: User | null = await currentUser();

	const plainUser = {
		id: user && user.id,
	};

	return (
		<>
			<Redirection user={plainUser} />
		</>
	);
};

export default HomePage;
