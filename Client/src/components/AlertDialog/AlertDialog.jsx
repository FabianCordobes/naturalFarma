import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAuth0 } from '@auth0/auth0-react';

export default function AlertDialog({ buttonText, title, description, handleAccept }) {
	const { logout } = useAuth0();

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleCancelSubmit = () => {
		setOpen(false);
	};

	const handleAcceptSubmit = () => {
		setOpen(false);
		handleAccept();
	};

	return (
		<React.Fragment>
			{buttonText === 'Eliminar' ? (
				<Button
					style={{background:'#ec3030', color:'#fff', fontWeight:'400', fontSize:'14px', height:'31px', marginTop:'2px'}}
					variant="filled"
					onClick={handleClickOpen}>
					{buttonText}
				</Button>
			) : (
				<Button
					variant="outlined"
					onClick={handleClickOpen}>
					{buttonText}
				</Button>
			)}
			<Dialog
				open={open}
				onClose={handleCancelSubmit}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description">
				<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						{description}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCancelSubmit}>Cancelar</Button>

					<Button
						onClick={handleAcceptSubmit}
						autoFocus>
						Acepto
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}

// logout({ returnTo: window.origin });