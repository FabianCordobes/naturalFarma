import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAuth0 } from '@auth0/auth0-react';

export default function AlertDialog({ buttonText, title, description }) {
	const { logout } = useAuth0();

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

   

	return (
		<React.Fragment>
			<Button
				variant="outlined"
				onClick={handleClickOpen}>
				{buttonText}
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description">
				<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						{description}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancelar</Button>

					<Button
						onClick={handleClose}
						autoFocus>
						Acepto
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
}

// logout({ returnTo: window.origin });
