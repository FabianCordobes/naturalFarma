import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getClientUsers } from '../../../../redux/actions/userActions';
import './ClientList.css'

const itemsPerPage = 7; 

export default function ClientList() {
  const dispatch = useDispatch();
  const clientUsers = useSelector((state) => state.user.clientUsers);

 
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getClientUsers());
  }, [dispatch]);

 
  const getCurrentPageUsers = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return clientUsers.slice(startIndex, endIndex);
  };

  return (
    <div className="user-list-container">
      <h1>Lista de Usuarios Normales</h1>
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
              Math.min(prev + 1, Math.ceil(clientUsers.length / itemsPerPage))
            )
          }
          disabled={currentPage === Math.ceil(clientUsers.length / itemsPerPage)}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}