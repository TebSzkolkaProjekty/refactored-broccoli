import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './hooks/authContext';
import './index.css';
import { LoginPage, ProfilePage, Root } from './routes/routes';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<AuthProvider>
				<Root />
			</AuthProvider>
		),
		children: [
			// { W.I.P
			// 	path: 'home',
			// 	element: <HomePage />,
			// },
			{
				path: 'profile/:userId',
				element: <ProfilePage />,
			},
			{
				path: 'login',
				element: <LoginPage />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	// <StrictMode>
	<RouterProvider router={router} />,
	// </StrictMode>
);
