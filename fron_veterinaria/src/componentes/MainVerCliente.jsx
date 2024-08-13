import { useState, useEffect } from 'react'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { URL_CLIENTES } from '../constants/clientes'
import axios from 'axios'

const MainVerCliente = () => {

  const { id } = useParams()
  const [cliente, setCliente] = useState({})

  const getCliente = async () => {
    try {
      let result = await axios.get(URL_CLIENTES + id)
      setCliente(result.data[0])
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCliente()
  }, [])

  return (
    <div>

      <br />
      <br />

      <Card style={{ width: '18rem' }}>

        <Card.Body>
          <Card.Title>{cliente.nom_ap}</Card.Title>
          <Card.Text>
            direccion : {cliente.direccion}

          </Card.Text>
          <Card.Text>
            email : {cliente.email}

          </Card.Text>
          <Card.Text>
            telefono : {cliente.telefono}

          </Card.Text>
          <Link className='btn btn-warning ' to="/clientes" variant="primary">Volver</Link>
        </Card.Body>
      </Card>


      <br />
      <br />
    </div>
  )
}

export default MainVerCliente