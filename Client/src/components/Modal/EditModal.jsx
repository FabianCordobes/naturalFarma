import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import axios from 'axios';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 350,
	height: '50%',
	background: '#fff',
	borderRadius: '4px',
	boxShadow: 24,
	padding: 4,
};

export default function EditModal({
	buttonText,
	modalText,
	inputDefaultValue,
	inputLabel,
	inputType,
	userData,
}) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [editedName, setEditedName] = React.useState(`${userData[0].name}`);

	const [editedLastName, setEditedLastName] = React.useState(`${userData[0].lastName}`);

	const [editedEmail, setEditedEmail] = React.useState(`${userData[0].email}`);

	const [editedPassword, setEditedPassword] = React.useState(`${userData[0].passwprd}`);
	// console.log(userData[0]);
	if (userData) {
		const [editedName, setEditedName] = React.useState(userData.name);
	}
	const userID = userData[0].id;
	// console.log(userID);

	const editName = async () => {
		try {
			const editedProduct = userData[0];

			editedProduct.name = editedName;
			editedProduct.lastName = editedLastName;
			// console.log(editedProduct);
			const response = await axios.put(`/user/${userID}`, editedProduct);
			// console.log(response);
			window.location.reload();
			handleClose();
		} catch (error) {
			console.log(error);
		}
	};

	const editEamil = async () => {
		try {
			const editedProduct = userData[0];

			editedProduct.email = editedEmail;
			// console.log(editedProduct);
			const response = await axios.put(`/user/${userID}`, editedProduct);
			console.log(response);
			window.location.reload();
			handleClose();
		} catch (error) {
			console.log(error);
		}
	};

	const editPassword = async () => {
		try {
			const editedProduct = userData[0];

			editedProduct.password = editedPassword;
			// console.log(editedProduct);
			const response = await axios.put(`/user/${userID}`, editedProduct);
			console.log(response);
			window.location.reload();
			handleClose();
		} catch (error) {
			console.log(error);
		}
	};
	// console.log(userData[0]);

	return (
		<div>
			<Button
				variant="outlined"
				sx={{
					backgroundColor: '#3d7bcd',
					color: '#fff',
					':hover': { color: '#000' },
					height: '100%',
				}}
				onClick={handleOpen}>
				{buttonText}
			</Button>
			{buttonText === 'Cambiar nombre' && (
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description">
					<div style={style}>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								gap: '10px',
								// height: '100%',
							}}>
							<Typography
								id="modal-modal-title"
								variant="h6"
								component="h2">
								{modalText}
							</Typography>

							<TextField
								required
								type={inputType}
								id="outlined-required"
								label="Escriba su nombre"
								onChange={(e) => setEditedName(e.target.value)}
								defaultValue={userData[0].name}
							/>

							<TextField
								required
								type={inputType}
								id="outlined-required"
								label="Escriba su apellido"
								onChange={(e) => setEditedLastName(e.target.value)}
								defaultValue={userData[0].lastName}
							/>

							<div>
								<Button onClick={handleClose}>Cancelar</Button>

								<Button
									onClick={editName}
									autoFocus>
									Acepto
								</Button>
							</div>
						</div>
					</div>
				</Modal>
			)}
			{buttonText === 'Cambiar email' && (
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description">
					<div style={style}>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								gap: '10px',
								// height: '100%',
							}}>
							<Typography
								id="modal-modal-title"
								variant="h6"
								component="h2">
								{modalText}
							</Typography>

							<TextField
								required
								type={inputType}
								id="outlined-required"
								label="Escriba su email"
								onChange={(e) => setEditedEmail(e.target.value)}
								defaultValue={userData[0].email}
							/>

							<div>
								<Button onClick={handleClose}>Cancelar</Button>

								<Button
									onClick={editEamil}
									autoFocus>
									Acepto
								</Button>
							</div>
						</div>
					</div>
				</Modal>
			)}

			{buttonText === 'Cambiar contraseña' && (
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description">
					<div style={style}>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								gap: '10px',
								// height: '100%',
							}}>
							<Typography
								id="modal-modal-title"
								variant="h6"
								component="h2">
								{modalText}
							</Typography>

							<TextField
								required
								type={inputType}
								id="outlined-required"
								label="Escriba su contraseña"
								onChange={(e) => setEditedPassword(e.target.value)}
								defaultValue={userData[0].password}
							/>

							<div>
								<Button onClick={handleClose}>Cancelar</Button>

								<Button
									onClick={handleClose}
									autoFocus>
									Acepto
								</Button>
							</div>
						</div>
					</div>
				</Modal>
			)}
		</div>
	);
}
