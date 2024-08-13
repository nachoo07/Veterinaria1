import React, { useEffect } from 'react'
import { useState } from 'react';
import FormUsuarios from '../../componentes/usuarios/formUsuarios'
import { singleUsuario } from '../../servicios/usuariosService';
import { useParams } from 'react-router-dom';

const FormularioUsuarios = () => {
    let { id_usuario } = useParams();
    const [usuario,setUsuario]=useState(null);

    useEffect(() => {
        if (id_usuario) {
            singleUsuario(id_usuario).then(result => {
                setUsuario(result)
            })
        }
    }, [])

    return (
        <FormUsuarios usuario={usuario} />
    )
}

export default FormularioUsuarios