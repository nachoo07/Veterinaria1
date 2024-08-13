import React from 'react'
import { useState, useEffect } from 'react'
import { crearMascota, editMascota } from '../../../servicios/mascotasService';
import { useNavigate } from 'react-router-dom'
import '../formMascotas/formMascotas.css'
import { Container, Form, Button, Card } from 'react-bootstrap';


const FormMascotas = (props) => {
    const { mascota } = props

    console.log(props)

    const navigate = useNavigate();
    const [nom_mascota, setNommascota] = useState('');
    const [especie, setEspecie] = useState('');
    const [raza, setRaza] = useState('');
    const [id_cliente, setIdcliente] = useState(0);
    const [fechaNacimiento, setFechaNacimiento] = useState()

    const submitMascota = async () => {
        let result = null;
        if (mascota) {
            result = editMascota(mascota.id_mascota, nom_mascota, especie, raza, fechaNacimiento, id_cliente);
        } else {
            result = crearMascota(nom_mascota, especie, raza, fechaNacimiento, id_cliente);
        }
        if (result) {
            alert("Paciente enviado exitosamente")
            navigate('/mascotas')
        }
    }
    useEffect(() => {
        if (mascota) {
            setNommascota(mascota.nom_mascota)
            setEspecie(mascota.especie)
            setRaza(mascota.raza)
            setIdcliente(mascota.id_cliente)
            setFechaNacimiento(mascota.fecha_nacimiento)
        }

    }, [mascota])


    return (
        <>
            <Container className='formulario-mascotas'>
                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                        <Card.Title className='card-mascotas'>{mascota ? 'Editar Mascota' : 'Agregar Mascota'}</Card.Title>
                        <Card.Text>
                            <Form.Group className="mb-3">
                                <Form.Label for="nomyape">Nombre del Paciente</Form.Label>
                                <Form.Control type="text" id="nom_mascota" placeholder="Nombre de la mascota" value={nom_mascota} onChange={(e) => {
                                    setNommascota(e.target.value)
                                }} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label for="Especie">Especie</Form.Label>
                                <Form.Control type="text" id="especie" placeholder="especie " value={especie} onChange={(e) => {
                                    setEspecie(e.target.value);
                                }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label for="Raza">Raza</Form.Label>
                                <Form.Control type="text" class="form-control" id="Raza" placeholder="Raza" value={raza} onChange={(e) => {
                                    setRaza(e.target.value);
                                }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label for="Fecha_nacimiento">Fecha de Nacimiento</Form.Label>
                                <Form.Control type="date" id="start" name="trip-start" value={fechaNacimiento} onChange={(e) => { setFechaNacimiento(e.target.value) }} />
                            </Form.Group>
                        </Card.Text>
                        <Button type="submit"  class="btn btn-primary" onClick={submitMascota}>{mascota ? 'Editar Mascota' : 'Agregar Mascota'}</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default FormMascotas