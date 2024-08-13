import React from 'react'
import { useState, useEffect } from 'react'
import { crearUsuario, editUsuario } from '../../servicios/usuariosService';
import { useNavigate } from 'react-router-dom'
import { Container, Form, Button, Card } from 'react-bootstrap';
const FormUsuarios = (props) => {
    const { usuario } = props;

    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [rol, setRol] = useState('');
    const [email, setEmail] = useState('');

    const submitCliente = async () => {
        let result = null;
        if (usuario) {
            result = editUsuario(usuario.id_usuario, nombre, contrasena, rol, email);
        } else {
            result = crearUsuario(nombre, contrasena, rol, email);
        }
        if (result) {
            alert("Cliente enviado exitosamente")
            navigate('/usuarios')
        }
    }
    useEffect(() => {
        if (usuario) {
            setNombre(usuario.nombre)
            setContrasena(usuario.contrasena)
            setRol(usuario.rol)
            setEmail(usuario.email)
        }

    }, [usuario])

    return (
        <>
            <Container className='formulario-mascotas'>
                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                        <Card.Title className='card-mascotas'>{usuario ? 'Editar Cliente' : 'Agregar Cliente'}</Card.Title>
                        <Card.Text>
                            <Form.Group className="mb-3">
                                <Form.Label for="nomyape">Nombre de usuario</Form.Label>
                                <Form.Control type="text" class="form-control" id="nomyape" placeholder="Nombre" value={nombre} onChange={(e) => {
                                    setNombre(e.target.value);
                                }} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label for="rol">Rol que cumple en la Veterinaria</Form.Label>
                                <Form.Control type="text" class="form-control" id="rol" placeholder="puesto de trabajo" value={rol} onChange={(e) => {
                                    setRol(e.target.value);
                                }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label for="email">Email</Form.Label>
                                <Form.Control type="email" class="form-control" id="email" placeholder="" value={email} onChange={(e) => {
                                    setEmail(e.target.value);
                                }} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label for="contrasena">contrasena</Form.Label>
                                <Form.Control type="password" class="form-control" id="contrasena" placeholder="***" value={contrasena} onChange={(e) => {
                                    setContrasena(e.target.value);
                                }} />
                            </Form.Group>
                        </Card.Text>
                        <Button type="submit" class="btn btn-primary" onClick={submitCliente}>{usuario ? 'Editar Cliente' : 'Agregar Cliente'}</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default FormUsuarios