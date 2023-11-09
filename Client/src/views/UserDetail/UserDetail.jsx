import { useAuth0 } from '@auth0/auth0-react';
import style from './UserDetail.module.css';
import { useState } from 'react';
import { PiWarningOctagonFill } from 'react-icons/pi';
import AlertDialog from '../../components/AlertDialog/AlertDialog';

const UserDetail = () => {
	const { isAuthenticated, user } = useAuth0();
	const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

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
