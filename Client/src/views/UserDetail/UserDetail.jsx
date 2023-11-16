import style from './UserDetail.module.css';
import { useEffect, useState } from 'react';
import { PiWarningOctagonFill } from 'react-icons/pi';
import AlertDialog from '../../components/AlertDialog/AlertDialog';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import axios from 'axios';
import EditModal from '../../components/Modal/EditModal';
import SimpleBackdrop from '../../components/SimpleBackdrop/SimpleBackdrop';
import { useNavigate } from 'react-router-dom';

const UserDetail = () => {
	const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
	const [userData, setUserData] = useState(null); // Estado para almacenar los datos del usuario

	const user = localStorage.getItem('user');
	const userID = user.split('"').join('');
	const navigate = useNavigate();

	// const logout = () => {
	// 	setAnchorEl(null);
	// 	handleClose();
	// 	// localStorage.setItem('user', JSON.stringify(''));
	// 	window.alert('Sesión cerrada con éxito');

	// 	handleLogout();
	// 	signOut(auth, provider)
	// 		.then(() => {
	// 			// Eliminar el token del localStorage al cerrar sesión
	// 			localStorage.removeItem('token');
	// 			localStorage.removeItem('admin');
	// 			// Puedes realizar otras acciones después de cerrar sesión si es necesario
	// 			window.location.reload();
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});

	// 	if (route === '/badlogin') {
	// 		navigate('/login');
	// 	}
	// };

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

	const handleDeleteAccount = async () => {
		try {
			setShowConfirmationDialog(true);
			const response = axios.delete(`/delete/${userID}`);
			console.log(response);
			navigate('/');
		
		} catch (error) {
			console.log(error);
		}
	};

	const handleDeleteAccountConfirm = () => {
		// Lógica para eliminar la cuenta del usuario
		// ...
		setShowConfirmationDialog(false); // Cierra el diálogo de confirmación
	};

	const handleCancelDeleteAccount = () => {
		setShowConfirmationDialog(false); // Cierra el diálogo de confirmación
	};

	const handleEditName = () => {
		setShowModalName(true);
	};

	const handleEditEmail = () => {
		setShowModalEmail(true);
	};

	const handleEditPassword = () => {
		setShowModalPassword(true);
	};

	return (
		<div className={style.container}>
			{!userData ? (
				<SimpleBackdrop />
			) : (
				<>
					<div className={style.leftSide}>
						{/* {isAuthenticated && (
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
					)} */}
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
						<EditModal
							buttonText="Cambiar nombre"
							modalText="Escriba su nuevo nombre"
							inputDefaultValue={''}
							inputLabel="Nombre"
							inputType="name"
							userData={userData}
						/>
						<EditModal
							buttonText="Cambiar email"
							modalText="Escriba su nuevo email"
							inputDefaultValue={''}
							inputLabel="Email"
							inputType="email"
							userData={userData}
						/>
						<EditModal
							buttonText="Cambiar contraseña"
							modalText="Escriba su nueva contraseña"
							inputDefaultValue={''}
							inputLabel="Contraseña"
							inputType="password"
							userData={userData}
						/>

						<AlertDialog
							buttonText={'Eliminar cuenta'}
							title={'¿Está seguro que desea eliminar su cuenta?'}
							description={'Tenga en cuenta que esta acción es irreversible'}
							handleAccept={handleDeleteAccount}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default UserDetail;
