import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAdminUsers } from '../../../../redux/actions/adminActions';
import './AdminList.css';

const itemsPerPage = 7; 

export default function AdminList() {
  const dispatch = useDispatch();
  const adminUsers = useSelector((state) => state.admin.adminUsers);

  
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getAdminUsers());
  }, [dispatch]);


  const getCurrentPageUsers = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return adminUsers.slice(startIndex, endIndex);
  };

  return (
    <div className="user-list-container">
      <h1>Lista de Usuarios Administradores</h1>
      <table className="user-list-table">
        <thead>
          <tr>
            <th>Nombre:</th>
            <th>Id:</th>
            <th>Apellido:</th>
            <th>Correo:</th>
            <th>Nacionalidad</th>
            <th>Birthday</th>
            <th>CreatedAt</th>
            <th>IsAdmin</th>
          </tr>
        </thead>
        <tbody>
          {getCurrentPageUsers().map((admin, index) => (
            <tr key={index}>
              <td>{admin.name}</td>
              <td>{admin.id}</td>
              <td>{admin.lastName}</td>
              <td>{admin.email}</td>
              <td>{admin.nationality}</td>
              <td>{admin.birthdate}</td>
              <td>{admin.birthdate}</td>
              <td>{admin.isAdmin}</td>
            </tr>
          ))}
        </tbody>
      </table>

      
      <div className="pagination">
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
