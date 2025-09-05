import React, { useState, useEffect } from 'react'
import axios from 'axios';


type Administrador = {
    _id: number;
    _nombres: string;
    _apellidos: string;
    _username: string;
    _perfil: string;
    _portada: string;
    _biografia: string;
    _telefono: string;
};

export default function ListaAdministradores() {
    const [administradores, setAdministradores] = useState<Administrador[]>([]);
    useEffect(() => {
        // Definir función para traer datos para traer administradores desde el backend

        async function fetchAdministradores() {
            // Traer response desde backend
            const response = await axios.get('http://localhost:4500/administrador');

            // Guardar datos en el estado
            setAdministradores(response.data);
            console.log(response.data);

        }
        // Llamar a la función para traer administradores
        fetchAdministradores();
    }, [])


    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Nombre de Usuario</th>
                        <th>Foto de Perfil</th>
                        <th>Foto de Portada</th>
                        <th>Biografia</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {administradores.map((administrador) => (
                        <tr key={administrador._id}>
                            <td>{administrador._id}</td>
                            <td>{administrador._nombres}</td>
                            <td>{administrador._apellidos}</td>
                            <td>{administrador._username}</td>
                            <td>{administrador._perfil}</td>
                            <td>{administrador._portada}</td>
                            <td>{administrador._biografia}</td>
                            <td>{administrador._telefono}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );

}