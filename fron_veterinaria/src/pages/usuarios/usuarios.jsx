import React, { useEffect, useState } from 'react'
import { buscarUsuarios } from '../../servicios/usuariosService'
import { Link } from 'react-router-dom'
import ListadoUsuarios from '../../componentes/usuarios/listadoUsuarios'

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([])

    const traerUsuarios = async () => {
        const listadeUsuarios = await buscarUsuarios();
        setUsuarios(listadeUsuarios);
    }

    useEffect(() => {
        traerUsuarios();
    }, [])

    return (
        <div className='container'>
            <div className='m-4'>
                <Link className='btn btn-primary' to='/usuarios/formulario'>Agregar nuevo Usuario</Link>
            </div>
            <ListadoUsuarios usuarios={usuarios} updateList={traerUsuarios} />
        </div>
    )
}
export default Usuarios;