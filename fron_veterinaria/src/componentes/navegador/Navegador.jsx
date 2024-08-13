import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import '../navegador/navegador.css'


const Navegador = () => {
  const navigate = useNavigate()
 

  return (
    <>
      <Navbar expand="lg" className=" navegador ">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav navegador" />
          <Navbar.Collapse id="basic-navbar-nav navegador">
            <Nav className="me-auto">
              <Nav.Link className="letras" onClick={() => navigate("/inicio")} >Inicio</Nav.Link>
              <Nav.Link className="letras" onClick={() => navigate("/sobreNosotros")} >Sobre nosotros</Nav.Link>
              <Nav.Link className="letras" onClick={() => navigate("/servicios")}>Servicios</Nav.Link>
              <Nav.Link className="letras" onClick={() => navigate("/sistema")}>Sistema</Nav.Link>
              

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navegador