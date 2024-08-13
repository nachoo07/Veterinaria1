import React from 'react'
import { borrarMascota } from '../../../servicios/mascotasService';
import { useNavigate } from 'react-router-dom'
import { Button, Container, Table } from 'react-bootstrap';

const ListadoMascotas = (props) => {

    const { mascotas, updateList } = props;
    const navigate = useNavigate()
    console.log(props)

    // funcion para llamar al servicio de borrar
    //     borrar mascota
    //     actualizar la lista
    const eliminarMascota = (id_mascota) => {
        const resultado = borrarMascota(id_mascota)
        alert("Mascota borrado exitosamente");
        updateList()
    }
    const modificarMascota = (id_mascota) => {
        navigate(`/mascotas/formulario/${id_mascota}`)
    }

    return (
        <Container>
            <div >

                <Table className="tabla-internacion">
                    <thead>
                        <tr>
                            <th className="titulo-tabla" >Nombre de la mascota</th>
                            <th className="titulo-tabla">Especie</th>
                            <th className="titulo-tabla">Raza</th>
                            <th className="titulo-tabla">Fecha de Nacimiento</th>
                            <th className="titulo-tabla">Acciones </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mascotas.map((mascota) => {
                                return (
                                    <tr>
                                        <td>{mascota.nom_mascota}</td>
                                        <td >{mascota.especie}</td>
                                        <td >{mascota.raza}</td>
                                        <td >{mascota.fecha_nacimiento}</td>
                                        <td>
                                            <Button className="botones-tabla-editar" variant='warning' onClick={() => { modificarMascota(mascota.id_mascota) }}>Editar</Button>
                                            <Button className="botones-tabla-eliminar" variant='danger' onClick={() => { eliminarMascota(mascota.id_mascota) }}>Borrar</Button>
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

export default ListadoMascotas