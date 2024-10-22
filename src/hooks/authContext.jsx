import {
	browserLocalPersistence,
	isSignInWithEmailLink,
	onAuthStateChanged,
	sendSignInLinkToEmail,
	setPersistence,
	signInWithEmailLink,
	signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		const setUpAuthListener = async () => {
			try {
				await setPersistence(auth, browserLocalPersistence);
				const unsubscribe = onAuthStateChanged(auth, (user) => {
					setUser(user);
					setLoading(false);
					console.log(user);
				});

				return unsubscribe;
			} catch (error) {
				console.error('Persistence error: ', error);
			}
		};

		const unsubscribe = setUpAuthListener();

		return () => unsubscribe;
	}, []);

	async function loginWithEmail(email) {
		try {
			await sendSignInLinkToEmail(auth, email, {
				url: 'http://localhost:5173/',
				handleCodeInApp: true,
			});
			window.localStorage.setItem('emailForSignIn', email);
		} catch (error) {
			console.error('Login link sending error: ', error.message);
		}
	}

	async function handleSignInWithEmailLink() {
		if (isSignInWithEmailLink(auth, window.location.href)) {
			let email = window.localStorage.getItem('emailForSignIn');

			if (!email) {
				email = window.prompt('Please provide your email for confirmation');
			}

			try {
				const result = await signInWithEmailLink(auth, email, window.location.href);
				window.localStorage.removeItem('emailForSignIn');
				navigate('/');
			} catch (error) {
				console.error('Error during email sign-in: ', error.message);
			}
		}
	}

	function logout() {
		signOut(auth)
			.then()
			.catch((error) => {
				console.error(error.message);
			});
	}

	return (
		<AuthContext.Provider value={{ user, loginWithEmail, handleSignInWithEmailLink, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
