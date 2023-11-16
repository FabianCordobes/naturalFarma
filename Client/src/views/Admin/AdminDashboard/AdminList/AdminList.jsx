import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { getAdminUsers } from '../../../../redux/actions/adminActions';
import style from './AdminList.module.css';

const itemsPerPage = 7; 

export default function AdminList() {
  const dispatch = useDispatch();
  const adminUsers = useSelector((state) => state.admin.adminUsers);

  
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAdminUsers());
  }, [dispatch]);

  const handleDeleteAdmin = async(id) => {
    console.log('Eliminando admin:'+id);
    const response = await axios.delete(`/admin/${id}`);
		
		if (response.status === 200) {
			dispatch(getAdminUsers());
		}
		else{
			window.alert('Error al eliminar administrador, comuniquese con soporte tecnico');
		}
  }


  const getCurrentPageUsers = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return adminUsers.slice(startIndex, endIndex);
  };

  return (
    <div className={style.userListContainer}>
      <h1 className={style.titulo}>Lista de Usuarios Administradores</h1>
      <table className={style.tabla}>
        <thead >
          <tr>
            <th>Nombre:</th>
            <th>Apellido:</th>
            <th>Correo:</th>
            <th>Nacionalidad</th>
            <th>Birthday</th>
            <th>CreatedAt</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className={style.body}>
          {getCurrentPageUsers().map((admin, index) => (
            <tr key={index} className={style.admins}>
              <td>{admin.name}</td>
              <td>{admin.lastName}</td>
              <td>{admin.email}</td>
              <td>{admin.nationality}</td>
              <td>{admin.birthdate}</td>
              <td>{admin.birthdate}</td>
              <td>
                <button onClick={()=>handleDeleteAdmin(admin.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <div className={style.pagination}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>Página {currentPage}</span>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, Math.ceil(adminUsers.length / itemsPerPage))
            )
          }
          disabled={currentPage === Math.ceil(adminUsers.length / itemsPerPage)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}