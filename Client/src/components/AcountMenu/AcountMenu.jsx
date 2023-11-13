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
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AccountMenu() {
	const { isAuthenticated, user } = useAuth0();
	const { logout, loginWithRedirect } = useAuth0();
	const userData = useSelector((state) => state.user.user);

	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
		// localStorage.removeItem('user');
		// localStorage.setItem('user', JSON.stringify(''));
		
	};

	const navigate = useNavigate();
	const UserDetail = () => {
		navigate('/userDetail');
		console.log(user.sub);
	};

	const toRegister = () => {
		navigate('/register');
	};
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
					{isAuthenticated ? (
						<img
							src={user.picture}
							width={50}
							style={{ borderRadius: '40px', margin: '0' }}
						/>
					) : (
						<Avatar />
					)}
				</IconButton>
			</Tooltip>
			{/* </Box> */}
			{isAuthenticated || userData ? (
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
							{isAuthenticated ? (
								<img
									src={user.picture}
									width={33}
									style={{ borderRadius: '40px', marginRight: '10px', marginTop: '0' }}
								/>
							) : (
								<Avatar />
							)}
						</ListItemIcon>
						Mi cuenta
					</MenuItem>
					<Divider />
					<MenuItem onClick={handleClose}>
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
					<MenuItem
						onClick={() => {
							handleClose, logout({ returnTo: window.origin });
						}}>
						<ListItemIcon>
							<Logout fontSize="small" />
						</ListItemIcon>
						Cerrar sesión
					</MenuItem>
				</Menu>
			) : (
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
						onClick={() => {
							loginWithRedirect();
							handleClose;
						}}>
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
