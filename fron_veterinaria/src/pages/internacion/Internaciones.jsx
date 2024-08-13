import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Table, Modal, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'
import { URL_INTERNACIONES, URL_INTERNACIONES_AGREGAR, URL_INTERNACIONES_ELIMINAR, URL_INTERNACIONES_EDITAR } from "../../constants/internaciones"
import '../internacion/internaciones.css'
const Internaciones = () => {
    const navigate = useNavigate()
    // MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setInternacionFrom(initialState);
        setEditMode(false)
        setShow(true)
    }
    // MODAL

    //FORMULARIO
    const initialState = {
        nomyape_cliente: "",
        fecha_internacion: "",
        descripcion_internacion: ""
    }
    const [InternacionFrom, setInternacionFrom] = useState(initialState)
    const [editMode, setEditMode] = useState(false)
    const [currentInternacionId, setCurrentInternacionId] = useState(null)
    // PETICION HTTP DEL POST Y UPDATE
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editMode) {
            try {
                const response = await axios.put(URL_INTERNACIONES_EDITAR + currentInternacionId, InternacionFrom)
                if (response.data) {
                    GetAllInternment();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Internacion Editada',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    handleClose();

                }
            } catch (error) {
                console.error("Error al editar internacion:", error);
                alert("Hubo un error al editar internacion. Por favor, intenta nuevamente.");
            }
        } else {
            try {
                const response = await axios.post(URL_INTERNACIONES_AGREGAR, {
                    nomyape_cliente: InternacionFrom.nomyape_cliente,
                    fecha_internacion: InternacionFrom.fecha_internacion,
                    descripcion_internacion: InternacionFrom.descripcion_internacion
                });

                if (response.data) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Internacion Agregada',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    GetAllInternment(); // Volver a cargar la lista de internacion después de agregar uno nuevo
                    setInternacionFrom(initialState)
                    handleClose(); // Cerrar el modal después de agregar internacion
                }
            } catch (error) {
                console.error("Error al agregar internacion:", error);
                alert("Hubo un error al agregar internacion. Por favor, intenta nuevamente.");
            }
        }

    }
    const handleChange = (e) => {
        setInternacionFrom({ ...InternacionFrom, [e.target.name]: e.target.value })

    }
    const handleEdit = (internaciones) => {
        setInternacionFrom(internaciones)
        setCurrentInternacionId(internaciones.id)
        setEditMode(true)
        setShow(true)
    }
    //FORMULARIO

    //PETICION HTTP DEL DELETE
    const handleDelete = async (id) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No podrás revertir esto",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(URL_INTERNACIONES_ELIMINAR + id);
                    if (response) {
                        Swal.fire(
                            'Eliminado',
                            'El producto ha sido eliminado.',
                            'success'
                        );
                        GetAllInternment();
                    }
                } catch (error) {
                    console.error("Error al eliminar el producto:", error);
                    Swal.fire(
                        'Error',
                        'Hubo un error al eliminar el producto. Por favor, intenta nuevamente.',
                        'error'
                    );
                }
            }
        });
    }
    //BOTON DE BORRADO

    //PETICION HTTP DEL GET
    const [internaciones, setInternaciones] = useState([])
    const GetAllInternment = async () => {
        try {
            const response = await axios.get(URL_INTERNACIONES);
            setInternaciones(response.data);
        } catch (error) {
            console.error("Error al obtener las internaciones:", error);
            alert("Hubo un error al obtener las internaciones. Por favor, intenta nuevamente.");
        }
    }
    useEffect(() => {
        GetAllInternment()
    }, [])
    //PETICION HTTP DEL GET
    return (
        <>

            <div className="bodyAboutUs">
                <div className="producto-boton-buscador">

                    <Button className=" boton-agregar-internacion" onClick={handleShow}>Agregar Internacion</Button>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{editMode ? "editar Internacion" : "Agregar Internacion"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Cliente</Form.Label>
                                <Form.Control type="text"
                                    onChange={handleChange}
                                    name='nomyape_cliente'
                                    placeholder="nombre y apellido del cliente"
                                    value={InternacionFrom.nomyape_cliente}
                                    required
                                    minlength="6"
                                    maxlength="6"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Fecha Internacion</Form.Label>
                                <Form.Control type="date"
                                    onChange={handleChange}
                                    name='fecha_internacion'
                                    placeholder="fecha de la internacion"
                                    value={InternacionFrom.fecha_internacion}
                                    required
                                    minlength="3"
                                    maxlength="25"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control as="textarea"
                                    onChange={handleChange}
                                    name='descripcion_internacion'
                                    placeholder="Descripción de la internacion"
                                    value={InternacionFrom.descripcion_internacion}
                                    required
                                    minlength="6"
                                    maxlength="6"
                                />
                            </Form.Group>
                            <Button className="boton-cerrar-modal" type='submit'>{editMode ? "Guardar Cambios" : "Agregar Internacion"}</Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="boton-cerrar-modal" onClick={handleClose}>cerrar</Button>
                    </Modal.Footer>
                </Modal>
                <Container >

                    <div>
                        {internaciones.length === 0 ? ('no hay cita para internacion') : (
                            <>
                                <Table className="tabla-internacion" bordered hover>
                                    <thead>
                                        <tr>
                                            <th className="titulo-tabla">Cliente</th>
                                            <th className="titulo-tabla">Fecha internacion</th>
                                            <th className="titulo-tabla">Descripcion</th>
                                            <th className="titulo-tabla">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {internaciones.map((internacion) => (
                                            <>
                                                <tr key={internacion.id}>
                                                    <td >{internacion.nomyape_cliente}</td>
                                                    <td>{internacion.fecha_internacion}</td>
                                                    <td>{internacion.descripcion_internacion}</td>
                                                    <td>
                                                        <Button className="botones-tabla-editar" variant='warning' onClick={() => handleEdit(internacion)}>Editar</Button>
                                                        <Button className="botones-tabla-eliminar" variant='danger' onClick={() => handleDelete(internacion.id)}>Eliminar</Button>
                                                    </td>
                                                </tr>
                                            </>
                                        ))}
                                    </tbody>
                                </Table>
                            </>
                        )}
                    </div>

                </Container>
            </div>

        </>
    )
}

export default Internaciones