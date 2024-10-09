import { Outlet } from 'react-router-dom';

function Root() {
	return (
		<>
			<h1>test</h1>
			<Outlet />
		</>
	);
}

export default Root;
