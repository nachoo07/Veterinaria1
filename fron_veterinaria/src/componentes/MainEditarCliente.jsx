import { useState, useEffect } from 'react'
import React from 'react'
import { Form, FormControl, FormGroup } from "react-bootstrap"
import axios from "axios"
import { URL_CLIENTES, URL_CLIENTE_EDITAR } from "../constants/clientes"

import { useParams, useNavigate } from "react-router-dom"


const MainEditarCliente = () => {

  const { id } = useParams()

  const navigate = useNavigate()

  const initialState = {
    nom_ap: "",
    direccion: "",
    email: "",
    telefono: ""
  }

  const [cliente, setCliente] = useState(initialState)

  const handdleSubmit = async (e) => {
    e.preventDefault()
    try {
      let response = await axios.put(URL_CLIENTE_EDITAR + id, {
        nom_ap: cliente.nom_ap,
        direccion: cliente.direccion,
        email: cliente.email,
        telefono: cliente.telefono

      })
      if (response.status === 200) {
        alert("contacto actuazlizado correctamente")
        navigate("/clientes/")
      }
    } catch (error) {
      console.error(error);
    }
  }

  const getData = async () => {
    let response = await axios.get(URL_CLIENTES + id)
    if (response.status === 200) {
      setCliente(response.data[0])
    }
  }

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    getData()
  }, [])



  return (
    <div>
      <br />
      <br />
      <h3 className='text-center'>Edita al Cliente</h3>
      <br />
      <Form onSubmit={handdleSubmit}>
        <FormGroup>
          <FormControl type='text' placeholder='Nombre y apellido' value={cliente.nom_ap} onChange={handleChange} name='nom_ap' />
          <br />
          <FormControl type='text' placeholder="Direccion" value={cliente.direccion} onChange={handleChange} name='direccion' />
          <br />
          <FormControl type='text' placeholder="Email" value={cliente.email} onChange={handleChange} name='email' />
          <br />
          <FormControl type='text' placeholder="Telefono" value={cliente.telefono} onChange={handleChange} name='telefono' />
          <br />
        </FormGroup>

        <button type='submit'>Actualizar</button>
      </Form>

      <br />
      <br />

    </div>
  )
}

export default MainEditarCliente