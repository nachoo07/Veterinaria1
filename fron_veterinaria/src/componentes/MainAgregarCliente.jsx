import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { URL_CLIENTES_AGREGAR } from '../constants/clientes'
import { useNavigate } from 'react-router-dom'


const MainAgregarCliente = () => {

  const navigate = useNavigate()

  const initialState = {
    nom_ap: "",
    direccion: "",
    email: "",
    telefono: ""
  }



  const [datosForm, setDatosForm] = useState(initialState)
  const handleSubmit = async (e) => {
    e.preventDefault()
    let response = await axios.post(URL_CLIENTES_AGREGAR, {
      nom_ap: datosForm.nom_ap,
      direccion: datosForm.direccion,
      email: datosForm.email,
      telefono: datosForm.telefono
    })
    if (response) {
      alert("Cliente agregado correctamente")
      navigate("/clientes")
    }


  }
  const handleChange = (e) => {
    setDatosForm({ ...datosForm, [e.target.name]: e.target.value })
  }


  return (
    <div>
      <br />
      <br />
      <h3>Agregar nuevo cliente</h3>
      <br />
      <br />
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Nombre completo</label>
        <input type="text" onChange={handleChange} name="nom_ap" />
        <br />
        <label htmlFor="">Direccion</label>
        <input type="text" onChange={handleChange} name='direccion' />
        <br />
        <label htmlFor="">Email</label>
        <input type="text" onChange={handleChange} name='email' />
        <br />
        <label htmlFor="">Telefono</label>
        <input type="text" onChange={handleChange} name='telefono' />
        <br />

        <button type="submit">Agregar</button>

      </form>

      <br />
      <br />
    </div>
  )
}

export default MainAgregarCliente