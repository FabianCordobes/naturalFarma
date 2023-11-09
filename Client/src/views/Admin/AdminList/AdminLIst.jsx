import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAdminUsers } from '../../../redux/actions/adminActions'

export default function AdminList () {

    const dispatch = useDispatch();

    const adminUsers = useSelector((state) => state.admin.adminUsers);

    useEffect(() => {
        dispatch(getAdminUsers());
    }, [dispatch]);


    return (
        <div>
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
                    {adminUsers.map((admin, index) =>
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
                    )}
                </tbody>
            </table>
        </div>
    )
}