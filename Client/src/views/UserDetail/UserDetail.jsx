import { useAuth0 } from '@auth0/auth0-react';
import style from './UserDetail.module.css';
import { useState } from 'react';
import { PiWarningOctagonFill } from 'react-icons/pi';
import AlertDialog from '../../components/AlertDialog/AlertDialog';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';

const UserDetail = () => {
	const { isAuthenticated, user } = useAuth0();
	const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

	const userData = useSelector((state) => state.user.user);

	const handleDeleteAccount = () => {
		setShowConfirmationDialog(true);
	};

	const handleDeleteAccountConfirm = () => {
		// Lógica para eliminar la cuenta del usuario
		// ...
		setShowConfirmationDialog(false); // Cierra el diálogo de confirmación
	};

	const handleCancelDeleteAccount = () => {
		setShowConfirmationDialog(false); // Cierra el diálogo de confirmación
	};

	return (
		<div className={style.container}>
			<div className={style.leftSide}>
				{isAuthenticated && (
					<>
						<div className={style.photoCont}>
							<img
								src={user.picture}
								alt={user.name}
							/>
						</div>
						<h3>{user.name}</h3>

						<div>
							<h4>{user.email}</h4>
							{user.email_verified === false ? (
								<div>
									<span>
										<PiWarningOctagonFill /> El email no ha sido verificado
									</span>
									<p>Por favor revise su buzón</p>
								</div>
							) : (
								<></>
							)}
						</div>
					</>
				)}
				{userData && (
					<>
						<div className={style.photoCont}>
							<Avatar/>
						</div>
						<h3>{`${userData.name} ${userData.lastName}`}</h3>

						<div>
							<h4>{userData.email}</h4>
							<h4>{userData.birthdate}</h4>
							<h4>{userData.nacionality}</h4>
						</div>
					</>
					// 
				)}
			</div>

			<div className={style.rightSide}>
				<button>Editar datos de usuario</button>
				<button>Editar contraseña</button>

				<AlertDialog
					buttonText={'Eliminar cuenta'}
					title={'¿Está seguro que desea eliminar su cuenta?'}
					description={'Tenga en cuenta que esta acción es irreversible'}
				/>
			</div>
		</div>
	);
};

export default UserDetail;


// userData
// : 
// birthdate
// : 
// "2004-10-14"
// createdAt
// : 
// "2023-11-10T14:44:35.606Z"
// deletedAt
// : 
// null
// email
// : 
// "fabianarielcordobes@gmail.com"
// id
// : 
// "31c6b0aa-12d9-440e-a7f8-9f06ba6c76ac"
// lastName
// : 
// "Cordobes"
// name
// : 
// "Fabian"
// nationality
// : 
// ""
// password
// : 
// "14102004aA@"
// updatedAt
// : 
// "2023-11-10T14:44:35.606Z"
