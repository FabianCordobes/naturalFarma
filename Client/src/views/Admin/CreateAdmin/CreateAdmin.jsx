import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAdminUser } from '../../../redux/actions/adminActions';
import { isNameValid, isEmailValid, isPasswordValid } from '../../../utils/registerValidations';
import './CreateAdmin.css'

export default function CreateAdmin () {

    const dispatch = useDispatch();

    const [adminFormData, setAdminFormData] = useState({
        name: '',
        lastName: '',
        birthdate: '',
        nationality: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAdmin: true
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {

        const {name, value} = event.target;

        setAdminFormData({ ...adminFormData, [name]: value});

        setErrors({ ...errors, [name]: ''});
    }

    const validateForm = () => {

        const newErrors = {};

        if(!isNameValid(adminFormData.name)) {

            newErrors.name = 'El nombre debe contener solo letras y tener entre 3 y 15 caracteres.';

        }

        if(!isNameValid(adminFormData.lastName)) {

            newErrors.lastName = 'El nombre debe contener solo letras y tener entre 3 y 15 caracteres.';

        }

        const currentDate = new Date ();
        const inputDate = new Date(adminFormData.birthdate);
        const age = currentDate.getFullYear() - inputDate.getFullYear();
        if(age < 18){

            newErrors.birthdate = 'Debes ser mayor de 18 años.';

        }

        if(!isEmailValid(adminFormData.email)) {

            newErrors.email = 'Correo electrónico no válido.';

        }

        if(!isPasswordValid(adminFormData.password)) {
            
            newErrors.password = 'La contraseña debe contener al menos 1 número, 1 mayúscula y 1 símbolo, con una longitud de 5 a 20 caracteres.';
    
        }

        if (adminFormData.password !== adminFormData.confirmPassword) {

            newErrors.confirmPassword = 'Las contraseñas no coinciden.';

        }

        setErrors(newErrors);

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        validateForm();

        if(Object.keys(errors).length === 0) {
            const newAdminData = {
                name: adminFormData.name,
                lastName: adminFormData.lastName,
                birthdate: adminFormData.birthdate,
                nationality: adminFormData.nationality,
                email: adminFormData.email,
                password: adminFormData.password,
                isAdmin: adminFormData.isAdmin
            };

            dispatch(addAdminUser(newAdminData))
        }
    }

    return(
        <div className='register-container'>
            <h1>Agregar usuario Administrador</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Nombre:</label>
                    <input type='text' name='name' value={adminFormData.name} onChange={handleInputChange} onBlur={validateForm} />
                    {errors.name && <p className='error'>{errors.name}</p>}
                </div>
                <div className='form-group'>
                    <label>Apellido:</label>
                    <input type='text' name='lastName' value={adminFormData.lastName} onChange={handleInputChange} onBlur={validateForm}/>
                    {errors.lastName && <p className="error">{errors.lastName}</p>}
                </div>
                <div className='form-group'>
                    <label>Fecha de Nacimiento:</label>
                    <input type='date' name='birthdate' value={adminFormData.birthdate} onChange={handleInputChange} onBlur={validateForm}/>
                    {errors.birthdate && <p className="error">{errors.birthdate}</p>}
                </div>
                <div className='form-group'>
                    <label>Nacionalidad:</label>
                    <select name='nationality' value={adminFormData.nationality} onChange={handleInputChange} onBlur={validateForm}>
                        <option value="">Selecciona una nacionalidad</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Chile">Chile</option>
                    </select>
                    {errors.nationality && <p className="error">{errors.nationality}</p>}
                </div>
                <div className='form-group'>
                    <label>Correo Electrónico:</label>
                    <input type='email' name='email' value={adminFormData.email} onChange={handleInputChange} onBlur={validateForm}/>
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input type='password' name='password' value={adminFormData.password} onChange={handleInputChange} onBlur={validateForm}/>
                    {errors.password && <p className='error'>{errors.password}</p>}
                </div>
                <div className='form-group'>
                    <label>Confirmar Contraseña:</label>
                    <input type='password' name='confirmPassword' value={adminFormData.confirmPassword} onChange={handleInputChange} onBlur={validateForm}/>
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                </div>
                <div className='form-group'>
                    <button type='submit'>Agregar Administrador</button>
                </div>
            </form>
        </div>
    )
}