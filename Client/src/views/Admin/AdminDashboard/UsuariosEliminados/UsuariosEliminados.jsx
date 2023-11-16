import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getDeleteUsers } from '../../../../redux/actions/userActions';

export default function UsuariosEliminados(){
    

    const dispatch = useDispatch();
	const deleteUsers = useSelector((state) => state.user.deleteUsers);

	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		dispatch(getDeleteUsers());
	}, [dispatch]);

    const handleRestoreUser = async (id)=>{
        
            console.log('Eliminar usuario'+id);
            const response = await axios.patch(`/user/${id}`);
            
            if (response.status === 200) {
                dispatch(getDeleteUsers());
            }
            else{
                window.alert('Error al restaurar el usuario');
            }
        
    }
    
    const itemsPerPage = 7;

	const getCurrentPageUsers = () => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return deleteUsers.slice(startIndex, endIndex);
	};

     return(
        <div className="user-list-container">
        <h1>Lista de Usuarios INACTIVOS</h1>
        <table className="user-list-table">
            <thead>
                <tr>
                    <th>Id:</th>
                    <th>Nombre:</th>
                    <th>Apellido:</th>
                    <th>Correo:</th>
                    <th>Nacionalidad</th>
                    <th>Birthday</th>
                    <th>CreatedAt</th>
                    <th>UpdatedAt</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {getCurrentPageUsers().map((user, index) => (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.nationality}</td>
                        <td>{user.birthdate}</td>
                        <td>{user.birthdate}</td>
                        <td>{user.updatedAt}</td>
                        <td>
                            <button onClick={()=>handleRestoreUser(user.id)}>
                                Restaurar usuario
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        <div className="pagination">
            <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}>
                Anterior
            </button>
            <span>Página {currentPage}</span>
            <button
                onClick={() =>
                    setCurrentPage((prev) =>
                        Math.min(prev + 1, Math.ceil(deleteUsers.length / itemsPerPage))
                    )
                }
                disabled={currentPage === Math.ceil(deleteUsers.length / itemsPerPage)}>
                Siguiente
            </button>
        </div>
    </div>
    )
 }