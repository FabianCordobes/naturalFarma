import { useAuth0 } from '@auth0/auth0-react';
import style from './UserDetail.module.css';
import { useEffect, useState } from 'react';
import { PiWarningOctagonFill } from 'react-icons/pi';
import AlertDialog from '../../components/AlertDialog/AlertDialog';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import axios from 'axios';

const UserDetail = () => {
	const { isAuthenticated, user } = useAuth0();
	const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
	const [userData, setUserData] = useState(null); // Estado para almacenar los datos del usuario

	const userID = useSelector((state) => state.user.user);
	useEffect(() => {
		const getUserData = async () => {
			try {
				if (userID) {
					const response = await axios.get(`/user/${userID}`);
					setUserData(response.data);
				}
			} catch (error) {
				console.error('Error al obtener datos del usuario:', error);
			}
		};

		// Llama a la función al montar el componente
		getUserData();
	}, [userID]);

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
				{userData &&
					userData.map((data) => (
						<div key={data.id}>
							<div className={style.photoCont}>
								<Avatar />
							</div>
							<h3>{`${data.name} ${data.lastName}`}</h3>

							<div>
								<h4>{data.email}</h4>
								<h4>{data.birthdate}</h4>
								<h4>{data.nationality}</h4>
							</div>
						</div>
					))}
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
