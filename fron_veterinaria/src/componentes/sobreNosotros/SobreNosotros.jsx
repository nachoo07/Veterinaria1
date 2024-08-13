import React from 'react'
import '../sobreNosotros/sobrenosotros.css';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import ignacio from "../../assets/sobrenosotros/ignacio.jpeg"
import karen from "../../assets/sobrenosotros/karen.jpeg"
import daiana from "../../assets/sobrenosotros/daiana.jpeg"
import adrian from "../../assets/sobrenosotros/adrian.jpeg"
import angie from "../../assets/sobrenosotros/angie.jpeg"
const SobreNosotros = () => {
  return (
    <>
      <Container fluid className="bodyAboutUs">
        <Container fluid>
          <Row>

            <Col md={12} className="primeraCardAboutUs d-flex justify-content-center" >
              <Card className="cardPrincipalAboutUs card-principal-hover text-center">
                <Card.Body>
                  <Card.Text>
                    Somos un equipo apasionado de desarrolladores web dedicados a crear soluciones digitales innovadoras. Nuestra misión es proporcionar a nuestros clientes experiencias excepcionales y aplicaciones efectivas, colaborando estrechamente con ellos para materializar su visión. Nos comprometemos con la excelencia técnica y la atención al detalle, adaptándonos constantemente a las últimas tendencias tecnológicas. Más que construir sitios y aplicaciones, forjamos asociaciones duraderas. Estamos preparados para enfrentar nuevos desafíos y crecer juntos. ¡Únete a nosotros en este emocionante viaje hacia el mundo de las posibilidades digitales!
                  </Card.Text>
                  <Button variant="primary" className="botonCardPrincipalAboutUs ">Conocer más</Button>

                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mb-3">

            <Col md={4} className="d-flex justify-content-center">
              <Card className="cardSecundariaAboutUs text-center">
                <Card.Img variant="top" className='imagen-sobrenosotros' src={karen} />
                <Card.Body>
                  <Card.Title>Karen Urueña</Card.Title>
                  <Card.Text>
                  Hola, soy Karen, tengo 26 años y actualmente estudiando la Tecnicatura en programación en UTN FRT. Soy un persona a la cuál le interesa mucho sobre ciencia y tecnología, motivo por el cuál estudio programación.
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="d-flex justify-content-center">
              <Card className="cardSecundariaAboutUs text-center">
                <Card.Img variant="top" className='imagen-sobrenosotros' src={ignacio} />
                <Card.Body>
                  <Card.Title>Ignacio Skibski</Card.Title>
                  <Card.Text>
                    Hola, soy Ignacio, un apasionado de la programación de 21 años. Estoy actualmente estudiando Tecnicatura en Programación en la UTN FRT, y cada día descubro nuevas posibilidades dentro del mundo del código.  
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="d-flex justify-content-center">
              <Card className="cardSecundariaAboutUs text-center">
                <Card.Img variant="top" className='imagen-sobrenosotros' src={daiana} />
                <Card.Body>
                  <Card.Title>Daiana Selis</Card.Title>
                  <Card.Text>
                  Hola , mí nombre es Daiana , tengo 27 años actualmente estoy cursando en segundo año  en la carrera de  tecnicatura universitaria en programación en la UTN FRT. Aficionada a los videojuegos y planeo dedicarme a programar para ellos
                  </Card.Text>
                 
                </Card.Body>
              </Card>
            </Col>
          </Row>


          <Row>
            <Col md={6} className="d-flex justify-content-center mb-3">
              <Card className="cardSecundariaAboutUs text-center">
                <Card.Img variant="top" className='imagen-sobrenosotros' src={angie}  />
                <Card.Body>
                  <Card.Title>Angie Goyechea</Card.Title>
                  <Card.Text>
                  Hola, soy Maria , tengo 28 años  Actualmente, estoy en un emocionante viaje de descubrimiento en el mundo de la programación, aprendiendo nuevas habilidades y conocimientos que me están abriendo un nuevo camino profesional y personal.
                    </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="d-flex justify-content-center mb-3">
              <Card className="cardSecundariaAboutUs text-center">
                <Card.Img variant="top" className='imagen-sobrenosotros' src={adrian} />
                <Card.Body>
                  <Card.Title>Adrian Gonzalezr</Card.Title>
                  <Card.Text>
                  Hola soy Adrián tengo 21 años soy estudiante de 2do año de la tecnicatura en programación, soy aficionado a la programación dirigida a videojuego y la ciberseguridad
                    </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default SobreNosotros