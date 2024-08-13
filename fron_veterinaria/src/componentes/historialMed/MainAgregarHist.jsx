import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { URL_HISTORIAL_AGREGAR } from '../../constants/historialMed'
import { useNavigate } from 'react-router-dom'
import { Container, Form, Card, Button } from 'react-bootstrap'


const MainAgregarHist = () => {

  const navigate = useNavigate()

  const initialState = {
    NomYape_cliente: "",
    enfermedades: "",
    alergias: "",
    medicinas: "",
    dosis: ""

  }



  const [datosForm, setDatosForm] = useState(initialState)
  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = await axios.post(URL_HISTORIAL_AGREGAR, {

      NomYape_cliente: datosForm.NomYape_cliente,
      enfermedades: datosForm.enfermedades,
      alergias: datosForm.alergias,
      medicinas: datosForm.medicinas,
      dosis: datosForm.dosis

    })
    if (response) {
      alert("Historial Medico agregado correctamente")
      navigate("/historial_med")
    }


  }
  const handleChange = (e) => {
    setDatosForm({ ...datosForm, [e.target.name]: e.target.value })
  }


  return (
    <div>
      <br />
      <br />
      <h3>Agregar nuevo Historial Medico</h3>

      <Container>
        <Card style={{ width: '25rem' }}>
         
          <Card.Body>
            
            <Card.Text>
              <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Nombre completo</label>
                <input type="text" onChange={handleChange} name="NomYape_cliente" />
                <br />
                <label htmlFor="">Enfermedades</label>
                <input type="text" onChange={handleChange} name='enfermedades' />
                <br />
                <label htmlFor="">Alergias</label>
                <input type="text" onChange={handleChange} name='alergias' />
                <br />
                <label htmlFor="">Medicinas</label>
                <input type="text" onChange={handleChange} name='medicinas' />
                <br />
                <label htmlFor="">Dosis</label>
                <input type="text" onChange={handleChange} name='dosis' />
                <br />

                <Button type="submit" variant="primary">Agregar</Button>
              </form>
            </Card.Text>

          </Card.Body>
        </Card>

      </Container>


    </div>
  )
}

export default MainAgregarHist