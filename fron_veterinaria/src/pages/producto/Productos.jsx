import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Button, Container, Table, Modal, Form } from 'react-bootstrap';
import { URL_PRODUCTOS, URL_PRODUCTOS_AGREGAR, URL_PRODUCTOS_EDITAR, URL_PRODUCTOS_ELIMINAR, URL_PRODUCTOS_FILTRO } from "../../constants/constants"
import Swal from 'sweetalert2'
import '../../pages/producto/producto.css'

const Productos = () => {
    // MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setProductosFrom(initialState);
        setEditMode(false)
        setShow(true)
    }
    // MODAL

    //FORMULARIO
    const initialState = {
        nombre: "",
        precio: "",
        stock: null,
        categoria: "",
        descripcion: ""
    }
    const [productosFrom, setProductosFrom] = useState(initialState)
    const [editMode, setEditMode] = useState(false)
    const [currentProductId, setCurrentProductId] = useState(null)
    // PETICION HTTP DEL POST Y UPDATE
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editMode) {
            try {
                const response = await axios.put(URL_PRODUCTOS_EDITAR + currentProductId, productosFrom)
                if (response.data) {
                    //alert("Producto editado correctamente");
                    GetAllProduct();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Producto Editado',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    handleClose();

                }
            } catch (error) {
                console.error("Error al editar el producto:", error);
                alert("Hubo un error al editar el producto. Por favor, intenta nuevamente.");
            }
        } else {
            try {
                const response = await axios.post(URL_PRODUCTOS_AGREGAR, {
                    nombre: productosFrom.nombre,
                    precio: productosFrom.precio,
                    stock: productosFrom.stock,
                    categoria: productosFrom.categoria,
                    descripcion: productosFrom.descripcion
                });

                if (response.data) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Producto Agregado',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    GetAllProduct(); // Volver a cargar la lista de productos después de agregar uno nuevo
                    setProductosFrom(initialState)
                    handleClose(); // Cerrar el modal después de agregar el producto
                }
            } catch (error) {
                console.error("Error al agregar el producto:", error);
                alert("Hubo un error al agregar el producto. Por favor, intenta nuevamente.");
            }
        }

    }
    const handleChange = (e) => {
        setProductosFrom({ ...productosFrom, [e.target.name]: e.target.value })

    }
    const handleEdit = (productos) => {
        setProductosFrom(productos)
        setCurrentProductId(productos.id)
        setEditMode(true)
        setShow(true)
    }
    //FORMULARIO

    // BOTON DE BORRADO
    //BUSQUEDA POR CATEGORIA
    const [filterCategoria, setFilterCategoria] = useState('')
    const GetProductsByCategoria = async (categoria) => {
        try {
            const response = await axios.get(URL_PRODUCTOS_FILTRO + categoria);
            setProductos(response.data);
        } catch (error) {
            console.error("Error al obtener los productos por categoría:", error);
            alert("Hubo un error al obtener los productos. Por favor, intenta nuevamente.");
        }
    }
    //BUSQUEDA POR CATEGORIA
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
                    const response = await axios.delete(URL_PRODUCTOS_ELIMINAR + id);
                    if (response) {
                        Swal.fire(
                            'Eliminado',
                            'El producto ha sido eliminado.',
                            'success'
                        );
                        GetAllProduct();
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
    const [productos, setProductos] = useState([])
    const GetAllProduct = async () => {
        try {
            const response = await axios.get(URL_PRODUCTOS);
            setProductos(response.data);

        } catch (error) {
            console.error("Error al obtener los productos:", error);
            alert("Hubo un error al obtener los productos. Por favor, intenta nuevamente.");
        }
    }
    useEffect(() => {
        if (filterCategoria) {
            GetProductsByCategoria(filterCategoria)
        } else {
            GetAllProduct()
        }

    }, [filterCategoria])
    //PETICION HTTP DEL GET
    return (
        <>
            <div className="bodyAboutUs">
                <div className="producto-boton-buscador">
                <Form.Select
                    className="mb-3 buscador"
                    value={filterCategoria}
                    onChange={(e) => setFilterCategoria(e.target.value)}
                    aria-label="Selecciona la categoría del producto">
                    <option value="">Todas las categorías</option>
                    <option value="Alimentos">Alimentos</option>
                    <option value="Medicinas">Medicina</option>
                    <option value="Higiene">Higiene</option>
                    <option value="Accesorios">Accesorios</option>
                    <option value="Otros">Otros</option>
                </Form.Select>
                <Button className=" boton-agregar-producto" onClick={handleShow}>Agregar Producto</Button>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{editMode ? "editar Producto" : "Agregar Producto"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" >
                                <Form.Label>nombre</Form.Label>
                                <Form.Control type="text"
                                    onChange={handleChange}
                                    name='nombre'
                                    placeholder="nombre del producto"
                                    value={productosFrom.nombre}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control type="text"
                                    onChange={handleChange}
                                    name='precio'
                                    placeholder="Precio del producto"
                                    value={productosFrom.precio}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Stock</Form.Label>
                                <Form.Control type="number"
                                    onChange={handleChange}
                                    name='stock'
                                    placeholder="Stock del producto"
                                    value={productosFrom.stock}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Categoría</Form.Label>
                                <Form.Select
                                    value={productosFrom.categoria}
                                    onChange={handleChange}
                                    name="categoria"
                                    required
                                    aria-label="Selecciona la categoría del producto">
                                    <option value="">Selecciona una categoría</option>
                                    <option value="Alimentos">Alimentos</option>
                                    <option value="Medicinas">Medicina</option>
                                    <option value="Higiene">Higiene</option>
                                    <option value="Accesorios">Accesorios</option>
                                    <option value="Otros">Otros</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control as="textarea"
                                    onChange={handleChange}
                                    name='descripcion'
                                    placeholder="Descripción del producto"
                                    value={productosFrom.descripcion}
                                />
                            </Form.Group>
                            <Button variant="primary" type='submit'>{editMode ? "Guardar Cambios" : "Agregar Producto"}</Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>cerrar</Button>
                    </Modal.Footer>
                </Modal>
                <Container >
                    
                    <div>
                    {productos.length === 0 ? ('no hay productos') : (
                        <>
                            <Table className="tabla-productos" bordered hover>
                                <thead>
                                    <tr>
                                        <th>nombre</th>
                                        <th>precio</th>
                                        <th>categoria</th>
                                        <th>stock</th>
                                        <th>descripcion</th>
                                        <th>acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productos.map((producto) => (
                                        <>
                                            <tr key={producto.id}>
                                                <td>{producto.nombre}</td>
                                                <td>{producto.precio}</td>
                                                <td>{producto.categoria}</td>
                                                <td>{producto.stock}</td>
                                                <td>{producto.descripcion}</td>
                                                <td>
                                                    <Button className="botones-tabla-editar" variant='warning' onClick={() => handleEdit(producto)}>Editar</Button>
                                                    <Button className="botones-tabla-eliminar" variant='danger' onClick={() => handleDelete(producto.id)}>Eliminar</Button>
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

export default Productos