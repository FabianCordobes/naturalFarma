import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useAuth0 } from '@auth0/auth0-react';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { firebaseConfig } from '../../firebaseConfig';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signOut } from 'firebase/auth';
import { handleLogout } from '../UserAuthentications/UserAuthentications';

export default function AccountMenu() {
	const userData = useSelector((state) => state.user.user);
	const navigate = useNavigate();

	const route = location.pathname;

	const app = initializeApp(firebaseConfig);
	const auth = getAuth();
	const provider = new GoogleAuthProvider();

	const [anchorEl, setAnchorEl] = React.useState(null);
	const [showUserMenu, setShowUserMenu] = React.useState(false);
	const [adminPanel, setAdminPanel] = React.useState(false);

	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const logout = () => {
		setAnchorEl(null);
		handleClose();
		// localStorage.setItem('user', JSON.stringify(''));
		window.alert('Sesión cerrada con éxito');

		handleLogout();
		signOut(auth, provider)
			.then(() => {
				// Eliminar el token del localStorage al cerrar sesión
				localStorage.removeItem('token');
				localStorage.removeItem('admin');
				// Puedes realizar otras acciones después de cerrar sesión si es necesario
				window.location.reload();
			})
			.catch((error) => {
				console.error(error);
			});

		if (route === '/badlogin') {
			navigate('/login');
		}
	};

	const UserDetail = () => {
		navigate('/userDetail');
	};

	const toHistory = () => {
		navigate('/history');
	};

	const toRegister = () => {
		navigate('/register');
	};

	const toAdminDashboard = () => {
		navigate('/admin');
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const isAuthenticated = () => {
		const admin = localStorage.getItem('admin');
		if (admin) {
			const spl = admin.split('"').join('');
			if (spl && spl === 'Panel Administracion') {
				setAdminPanel(true);
			}
		}

		const token = localStorage.getItem('token');
		if (token && token != null) {
			setShowUserMenu(true);
		} else {
			setShowUserMenu(false);
		}
	};

	React.useEffect(() => {
		isAuthenticated(); // Llama a la función para verificar la autenticación
	}, []);

	return (
		<React.Fragment>
			{/* <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}> */}
			<Tooltip title="Account settings">
				<IconButton
					onClick={handleClick}
					size="small"
					sx={{ ml: 2 }}
					aria-controls={open ? 'account-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}>
					{/* {isAuthenticated ? (
						<img
							src={user.picture}
							width={50}
							style={{ borderRadius: '40px', margin: '0' }}
						/>
					) : ( */}
					<Avatar />
					{/* )} */}
				</IconButton>
			</Tooltip>
			{/* </Box> */}
			{adminPanel && showUserMenu && (
				<Menu
					anchorEl={anchorEl}
					id="account-menu"
					open={open}
					onClose={handleClose}
					onClick={handleClose}
					PaperProps={{
						elevation: 0,
						sx: {
							overflow: 'visible',
							filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
							mt: 1.5,
							'& .MuiAvatar-root': {
								width: 32,
								height: 32,
								ml: -0.5,
								mr: 1,
							},
							'&:before': {
								content: '""',
								display: 'block',
								position: 'absolute',
								top: 0,
								right: 14,
								width: 10,
								height: 10,
								bgcolor: 'background.paper',
								transform: 'translateY(-50%) rotate(45deg)',
								zIndex: 0,
							},
						},
					}}
					transformOrigin={{ horizontal: 'right', vertical: 'top' }}
					anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
					<MenuItem
						onClick={(handleClose, UserDetail)}
						style={{ paddingLeft: '10px' }}>
						<ListItemIcon>
							<Avatar />
						</ListItemIcon>
						Administrador
					</MenuItem>
					<Divider />

					<MenuItem onClick={(handleClose, toAdminDashboard)}>
						<ListItemIcon>
							<AdminPanelSettingsIcon fontSize="small" />
						</ListItemIcon>
						Dashboard de administrador
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<ListItemIcon>
							<Settings fontSize="small" />
						</ListItemIcon>
						Ajustes
					</MenuItem>
					<MenuItem onClick={logout}>
						<ListItemIcon>
							<Logout fontSize="small" />
						</ListItemIcon>
						Cerrar sesión
					</MenuItem>
				</Menu>
			)}
			{showUserMenu && adminPanel === false && (
				<Menu
					anchorEl={anchorEl}
					id="account-menu"
					open={open}
					onClose={handleClose}
					onClick={handleClose}
					PaperProps={{
						elevation: 0,
						sx: {
							overflow: 'visible',
							filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
							mt: 1.5,
							'& .MuiAvatar-root': {
								width: 32,
								height: 32,
								ml: -0.5,
								mr: 1,
							},
							'&:before': {
								content: '""',
								display: 'block',
								position: 'absolute',
								top: 0,
								right: 14,
								width: 10,
								height: 10,
								bgcolor: 'background.paper',
								transform: 'translateY(-50%) rotate(45deg)',
								zIndex: 0,
							},
						},
					}}
					transformOrigin={{ horizontal: 'right', vertical: 'top' }}
					anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
					<MenuItem
						onClick={(handleClose, UserDetail)}
						style={{ paddingLeft: '10px' }}>
						<ListItemIcon>
							<Avatar />
						</ListItemIcon>
						Mi cuenta
					</MenuItem>
					<Divider />
					<MenuItem onClick={(handleClose, toHistory)}>
						<ListItemIcon>
							<ManageSearchIcon fontSize="small" />
						</ListItemIcon>
						Historial de compra
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<ListItemIcon>
							<Settings fontSize="small" />
						</ListItemIcon>
						Ajustes
					</MenuItem>
					<MenuItem onClick={logout}>
						<ListItemIcon>
							<Logout fontSize="small" />
						</ListItemIcon>
						Cerrar sesión
					</MenuItem>
				</Menu>
			)}
			{showUserMenu === false && adminPanel === false && (
				<Menu
					anchorEl={anchorEl}
					id="account-menu"
					open={open}
					onClose={handleClose}
					onClick={handleClose}
					PaperProps={{
						elevation: 0,
						sx: {
							overflow: 'visible',
							filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
							mt: 1.5,
							'& .MuiAvatar-root': {
								width: 32,
								height: 32,
								ml: -0.5,
								mr: 1,
							},
							'&:before': {
								content: '""',
								display: 'block',
								position: 'absolute',
								top: 0,
								right: 14,
								width: 10,
								height: 10,
								bgcolor: 'background.paper',
								transform: 'translateY(-50%) rotate(45deg)',
								zIndex: 0,
							},
						},
					}}
					transformOrigin={{ horizontal: 'right', vertical: 'top' }}
					anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
					<MenuItem onClick={() => navigate('/login')}>
						<ListItemIcon>
							<LoginIcon fontSize="small" />
						</ListItemIcon>
						Iniciar sesión
					</MenuItem>
					<MenuItem onClick={toRegister}>
						<ListItemIcon>
							<PersonAddAltIcon fontSize="small" />
						</ListItemIcon>
						Registrarse
					</MenuItem>
				</Menu>
			)}
		</React.Fragment>
	);
}
