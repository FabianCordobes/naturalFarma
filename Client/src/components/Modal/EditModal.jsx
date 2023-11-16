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
	height: 150,
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

	const [editedName, setEditedName] = React.useState(
		`${userData[0].name} ${userData[0].lastName}`
	);

	const [originalName, setOriginalName] = React.useState(
		`${userData[0].name} ${userData[0].lastName}`
	);

	
	// console.log(userData[0]);
	if (userData) {
		// const [editedName, setEditedName] = React.useState(userData.name);
	}
	const userID = userData[0].id;
	// console.log(userID);

	const editName = () => {
		try {
			// const response = await axios.put(`/user/${userID}`, editedProduct)
		} catch (error) {}
	};

	return (
		<div>
			<Button
				variant="outlined"
				sx={{ backgroundColor: '#3d7bcd', color: '#fff', ':hover': { color: '#000' } }}
				onClick={handleOpen}>
				{buttonText}
			</Button>
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
							label={inputLabel}
							defaultValue={inputDefaultValue}
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
		</div>
	);
}
