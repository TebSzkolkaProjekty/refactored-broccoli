import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import MiniDrawer from '../components/navbar/navbar';
import { useAuth } from '../hooks/hooks';

function Root() {
	const { user, handleSignInWithEmailLink } = useAuth();
	useEffect(() => {
		if (!user) handleSignInWithEmailLink();
	}, [handleSignInWithEmailLink, user]);

	return (
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
			<MiniDrawer />
			<Outlet />
		</div>
	);
}

export default Root;
