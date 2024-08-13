
import sobrenosotro from '../../assets/paginaInicio/sobrenosotro.png'
import servicios from "../../assets/paginaInicio/servicios.png"
import sistema from '../../assets/paginaInicio/sistema.png'
import { Container, Card ,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../home/home.css'



const Home = () => {
  const navigate = useNavigate()
  return (
    <>
    
    <h1 className='titulo-inicio'>Bienvenido a nuestro sistema</h1>

    
    <Container  className='card_inicio'>
      
        <div className='boton-inicio'>
    <Card style={{ width: '22rem' }} >
      <Card.Img variant="top" src={sobrenosotro} />
      <Card.Body>
        <Button  onClick={() => navigate("/sobreNosotros")} className='boton-color'>Sobre Nosotros</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='boton-inicio'>
    <Card style={{ width: '22rem' }} >
      <Card.Img variant="top" src={servicios} />
      <Card.Body>
        <Button onClick={() => navigate("/servicios")} className='boton-color'>Servicios</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='boton-inicio'>
    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={sistema} />
      <Card.Body>
        <Button onClick={() => navigate("/sistema")} className='boton-color'>Sistemas</Button>
      </Card.Body>
    </Card>
    </div>
</Container>
    </>
  )
}

export default Home