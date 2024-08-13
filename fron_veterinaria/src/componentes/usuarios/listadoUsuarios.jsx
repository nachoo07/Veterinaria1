import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { borarUsuario, editUsuario } from '../../servicios/usuariosService';
import { Container, Table, Button } from 'react-bootstrap';

const ListadoUsuarios = (props) => {
    const { usuarios, updateList } = props;
    const navigate = useNavigate()

    console.log(usuarios)

    const eliminarUsuario = (id_usuario) => {
        const resultado = borarUsuario(id_usuario)
        alert("usuario borrado exitosamente");
        updateList()
    }
    const modificarUsuario = (id_usuario) => {
        navigate(`/usuarios/formulario/${id_usuario}`)
    }
    return (
        <Container>
            <div >
                <Table className="tabla-internacion">
                    <thead>
                        <tr>

                            <th className="titulo-tabla">Nombre y Apellido</th>
                            <th className="titulo-tabla">ROl que cumple dentro de la Veterinaria</th>
                            <th className="titulo-tabla">Email</th>
                            <th className="titulo-tabla"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios.map((usuario) => {
                                return (
                                    <tr>

                                        <td scope="col">{usuario.nombre}</td>
                                        <td scope="col">{usuario.rol}</td>
                                        <td scope="col">{usuario.email}</td>

                                        <td>
                                            <Button className="botones-tabla-editar" variant='warning' onClick={() => { modificarUsuario(usuario.id_usuario) }}>Editar</Button>
                                            <Button className="botones-tabla-eliminar" variant='danger' onClick={() => { eliminarUsuario(usuario.id_usuario) }}>Borrar</Button>


                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </Container>
    )

}

export default ListadoUsuarios