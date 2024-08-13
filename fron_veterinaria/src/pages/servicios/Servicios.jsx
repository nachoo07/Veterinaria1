import internaciones from '../../assets/paginaservicios/internaciones.png'
import mascota from "../../assets/paginaservicios/mascota.png"
import { Container, Card ,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Servicios = () => {
  const navigate = useNavigate()
  return (
    <>
    <h1 className='titulo-inicio'>Servicios</h1>

    
<Container  className='card_inicio'>

    <div className='boton-inicio'>
<Card style={{ width: '22rem' }} >
  <Card.Img variant="top" src={internaciones} />
  <Card.Body>
    <Button onClick={() => navigate("/internaciones")} className='boton-color'>Internaciones</Button>
  </Card.Body>
</Card>
</div>
<div className='boton-inicio'>
<Card style={{ width: '22rem' }} >
  <Card.Img variant="top" src={mascota} />
  <Card.Body>
    <Button onClick={() => navigate("/mascotas")} className='boton-color'>Mascotas</Button>
  </Card.Body>
</Card>
</div>
<div className='boton-inicio'>
<Card style={{ width: '22rem' }} >
  <Card.Img variant="top" src={mascota} />
  <Card.Body>
    <Button onClick={() => navigate("/historial_med")} className='boton-color'>Historial Medico</Button>
  </Card.Body>
</Card>
</div>
</Container>
    </>
  )
}

export default Servicios