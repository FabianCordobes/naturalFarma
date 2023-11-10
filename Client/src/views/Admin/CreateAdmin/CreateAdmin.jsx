import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../redux/actions/userActions';
import './CreateAdmin.css';
import {
	isNameValid,
	isEmailValid,
	isPasswordValid,
} from '../../../utils/registerValidations';
import { addAdminUser } from '../../../redux/actions/adminActions';

export default function CreateAdmin() {
	const dispatch = useDispatch();

	const [formData, setFormData] = useState({
		name: '',
		lastName: '',
		birthdate: '',
		nationality: '',
		email: '',
		password: '',
		confirmPassword: '',
		isAdmin: false, // Nueva propiedad para el checkbox
	});

	const [errors, setErrors] = useState({});

	const handleInputChange = (event) => {
		const { name, value, type, checked } = event.target;

		// Manejar el cambio del checkbox
		const inputValue = type === 'checkbox' ? checked : value;

		setFormData({ ...formData, [name]: inputValue });
		setErrors({ ...errors, [name]: '' });
	};

	const validateForm = () => {
		const newErrors = {};

		if (!isNameValid(formData.name)) {
			newErrors.name =
				'El nombre debe contener solo letras y tener entre 3 y 15 caracteres.';
		}

		if (!isNameValid(formData.lastName)) {
			newErrors.lastName =
				'El apellido debe contener solo letras y tener entre 3 y 15 caracteres.';
		}

		const currentDate = new Date();
		const inputDate = new Date(formData.birthdate);
		const age = currentDate.getFullYear() - inputDate.getFullYear();
		if (age < 18) {
			newErrors.birthdate = 'Debes ser mayor de 18 años.';
		}

		if (!isEmailValid(formData.email)) {
			newErrors.email = 'Correo electrónico no válido.';
		}

		if (!isPasswordValid(formData.password)) {
			newErrors.password =
				'La contraseña debe contener al menos 1 número, 1 mayúscula y 1 símbolo, con una longitud de 5 a 20 caracteres.';
		}

		if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = 'Las contraseñas no coinciden.';
		}

		setErrors(newErrors);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		validateForm();

		if (Object.keys(errors).length === 0) {
			const userData = {
				name: formData.name,
				lastName: formData.lastName,
				birthdate: formData.birthdate,
				nationality: formData.nationality,
				password: formData.password,
				email: formData.email,
				isAdmin: formData.isAdmin, // Incluir el valor del checkbox
			};
            console.log(userData);
			dispatch(addAdminUser(userData));

		}
	};

	return (
		<div className="register-container">
			<h1>Registro de Usuario</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Nombre:</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						onBlur={validateForm}
					/>
					{errors.name && <p className="error">{errors.name}</p>}
				</div>
				<div className="form-group">
					<label>Apellido:</label>
					<input
						type="text"
						name="lastName"
						value={formData.lastName}
						onChange={handleInputChange}
						onBlur={validateForm}
					/>
					{errors.lastName && <p className="error">{errors.lastName}</p>}
				</div>
				<div className="form-group">
					<label>Fecha de Nacimiento:</label>
					<input
						type="date"
						name="birthdate"
						value={formData.birthdate}
						onChange={handleInputChange}
						onBlur={validateForm}
					/>
					{errors.birthdate && <p className="error">{errors.birthdate}</p>}
				</div>
				<div className="form-group">
					<label>Nacionalidad:</label>
					<select
						name="nationality"
						value={formData.nationality}
						onChange={handleInputChange}
						onBlur={validateForm}>
						<option value="">Selecciona una nacionalidad</option>
						<option value="Argentina">Argentina</option>
						<option value="Brasil">Brasil</option>
						<option value="Chile">Chile</option>
					</select>
					{errors.nationality && <p className="error">{errors.nationality}</p>}
				</div>
				<div className="form-group">
					<label>Correo Electrónico:</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						onBlur={validateForm}
					/>
					{errors.email && <p className="error">{errors.email}</p>}
				</div>
				<div className="form-group">
					<label>Contraseña:</label>
					<input
						type="password"
						name="password"
						value={formData.password}
						onChange={handleInputChange}
						onBlur={validateForm}
					/>
					{errors.password && <p className="error">{errors.password}</p>}
				</div>
				<div className="form-group">
					<label>Confirmar Contraseña:</label>
					<input
						type="password"
						name="confirmPassword"
						value={formData.confirmPassword}
						onChange={handleInputChange}
						onBlur={validateForm}
					/>
					{errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
				</div>
				<div>
					<label>Añadir administrador</label>
					<input
						type="checkbox"
						name="isAdmin"
						checked={formData.isAdmin}
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-group">
					<button type="submit">Registrarse</button>
				</div>
			</form>
		</div>
	);
}
