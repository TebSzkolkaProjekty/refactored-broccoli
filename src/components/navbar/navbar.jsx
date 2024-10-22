import { AccountCircleOutlined, HomeOutlined, LoginOutlined, LogoutOutlined, Menu } from '@mui/icons-material';
import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/hooks';

function DrawerButton({ text, clicked, children, open }) {
	return (
		<ListItem button onClick={clicked}>
			<ListItemIcon>{children}</ListItemIcon>
			{open && <ListItemText primary={text} />}
		</ListItem>
	);
}

export default function MiniDrawer() {
	const { user, logout } = useAuth();
	const navigate = useNavigate();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const drawerOpened = sessionStorage.getItem('DrawerStatus');
		setOpen(drawerOpened === 'true');
	}, []);

	const toggleDrawer = () => {
		setOpen(!open);
		sessionStorage.setItem('DrawerStatus', !open);
	};

	return (
		<div style={{ display: 'flex' }}>
			<Drawer
				variant={open ? 'persistent' : 'permanent'}
				open={open}
				sx={{
					width: open ? 240 : 60, // Mini width when closed
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: open ? 240 : 60, // Mini width when closed
						transition: 'width 0.3s ease-in-out',
					},
				}}>
				<Button variant='outlined' onClick={toggleDrawer}>
					<Menu />
				</Button>
				<List>
					<DrawerButton text='Profile' clicked={() => navigate('/profile/1')} open={open}>
						<AccountCircleOutlined />
					</DrawerButton>
					<DrawerButton text='Home' clicked={() => navigate('/home')} open>
						<HomeOutlined />
					</DrawerButton>
					{!user ? (
						<DrawerButton text='Login' clicked={() => navigate('/login')} open>
							<LoginOutlined />
						</DrawerButton>
					) : (
						<DrawerButton text='Logout' clicked={() => logout()} open>
							<LogoutOutlined />
						</DrawerButton>
					)}
				</List>
			</Drawer>
		</div>
	);
}
