import SendIcon from '@mui/icons-material/Send';
import { Alert, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useAuth } from '../../hooks/hooks';
import styles from './login.module.css';

function LoginPage() {
	const { loginWithEmail } = useAuth();

	const [email, setEmail] = useState('');
	const [buttonClicked, setButtonClicked] = useState(false);
	const [isValid, setIsValid] = useState({
		valid: false,
		message: '',
	});

	const isValidEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleEmailInput = (e) => {
		const newEmail = e.target.value.trim();
		setEmail(newEmail);

		if (newEmail.length <= 0) {
			setIsValid({ valid: false, message: 'Email cannot be empty' });
		} else if (!isValidEmail(newEmail)) {
			setIsValid({ valid: false, message: 'Please enter a valid email address.' });
		} else {
			setIsValid({ valid: true, message: '' });
		}
	};

	return (
		<div className={styles.div}>
			{buttonClicked && (
				<Alert variant='outlined' severity='success'>
					Hey! Check your inbox — we sent you a login link!
				</Alert>
			)}
			<div>
				<TextField
					label='Email'
					onChange={handleEmailInput}
					error={!isValid.valid}
					helperText={isValid.message}
					disabled={buttonClicked}
				/>
				<Button
					variant='contained'
					color='success'
					size='large'
					disabled={!isValid.valid || buttonClicked}
					onClick={() => {
						loginWithEmail(email);
						setButtonClicked(true);
					}}
					sx={{ maxHeight: '58px' }}>
					<SendIcon />
				</Button>
			</div>
		</div>
	);
}

export default LoginPage;
