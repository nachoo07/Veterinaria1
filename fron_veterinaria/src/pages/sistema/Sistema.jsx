import React from 'react'
import clientes from '../../assets/paginaSistema/clientes.png'
import productos from '../../assets/paginaSistema/productos.png'
import { Container, Card ,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Sistema = () => {
    const navigate = useNavigate()
  return (
    <>
    <h1 className='titulo-inicio'>Sistema</h1>

    
<Container  className='card_inicio'>

    <div className='boton-inicio'>
<Card style={{ width: '22rem' }} >
  <Card.Img variant="top" src={clientes} />
  <Card.Body>
    <Button onClick={() => navigate("/clientes")} className='boton-color'>Clientes</Button>
  </Card.Body>
</Card>
</div>
<div className='boton-inicio'>
<Card style={{ width: '22rem' }} >
  <Card.Img variant="top" src={productos} />
  <Card.Body>
    <Button onClick={() => navigate("/productos")} className='boton-color'>Productos</Button>
  </Card.Body>
</Card>
</div>
<div className='boton-inicio'>
<Card style={{ width: '22rem' }} >
  <Card.Img variant="top" src={productos} />
  <Card.Body>
    <Button onClick={() => navigate("/usuarios")} className='boton-color'>Usuarios</Button>
  </Card.Body>
</Card>
</div>
</Container>
    </>
  )
}

export default Sistema