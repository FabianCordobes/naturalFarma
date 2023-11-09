import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getClientUsers } from '../../../redux/actions/userActions';
import './ClientList.css'

export default function ClientList () {

    const dispatch = useDispatch();

    const clientUsers = useSelector((state) => state.user.clientUsers);

    useEffect(() => {
        dispatch(getClientUsers());
    }, [dispatch]);


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
                    {clientUsers.map((user, index) =>
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
                    )}
                </tbody>
            </table>
        </div>
    );
};