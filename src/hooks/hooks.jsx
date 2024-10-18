import { useContext } from 'react';
import { AuthContext } from './authContext';

export const createUseContextHook = (Context, providerName) => {
	return () => {
		const context = useContext(Context);
		if (!context) {
			throw new Error(`use${providerName} must be used within a ${providerName}`);
		}
		return context;
	};
};

export const useAuth = createUseContextHook(AuthContext);
