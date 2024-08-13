import { useState, useEffect } from 'react'
import React from 'react'
import { Form, FormControl, FormGroup } from "react-bootstrap"
import axios from "axios"
import { URL_HISTORIAL, URL_HISTORIAL_EDITAR } from "../../constants/historialMed"

import { useParams, useNavigate } from "react-router-dom"


const MainEditarHist = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const initialState = {
        nomYape_cliente: "",
        enfermedades: "",
        alergias: "",
        medicinas: "",
        dosis: ""
    }

    const [historial_med, setHistorial] = useState(initialState)

    const handdleSubmit = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.put(URL_HISTORIAL_EDITAR + id, {
                NomYape_cliente: historial_med.nomYape_cliente,
                enfermedades: historial_med.enfermedades,
                alergias: historial_med.alergias,
                medicinas: historial_med.medicinas,
                dosis: historial_med.dosis

            })
            if (response.status === 200) {
                alert("Historial actuazlizado correctamente")
                navigate("/historial_med/")
            }
        } catch (error) {
            console.error(error);
        }
    }

    const getData = async () => {
        let response = await axios.get(URL_HISTORIAL + id)
        if (response.status === 200) {
            setHistorial(response.data[0])
        }
    }

    const handleChange = (e) => {
        setHistorial({ ...historial_med, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        getData()
    }, [])



    return (
        <div>
            <br />
            <br />
            <h3 className='text-center'>Edita el Historial Medico</h3>
            <br />
            <Form onSubmit={handdleSubmit}>
                <FormGroup>
                    <FormControl type='text' placeholder='Nombre Mascota' value={historial_med.nomYape_cliente} onChange={handleChange} name='nomYape_cliente' />
                    <br />
                    <FormControl type='text' placeholder="Enfermedades" value={historial_med.enfermedades} onChange={handleChange} name='enfermedades' />
                    <br />
                    <FormControl type='text' placeholder="Alergias" value={historial_med.alergias} onChange={handleChange} name='alergias' />
                    <br />
                    <FormControl type='text' placeholder="Medicinas" value={historial_med.medicinas} onChange={handleChange} name='medicinas' />
                    <br />
                    <FormControl type='text' placeholder="Dosis" value={historial_med.dosis} onChange={handleChange} name='dosis' />
                    <br />
                </FormGroup>

                <button type='submit'>Actualizar</button>
            </Form>

            <br />
            <br />

        </div>
    )
}

export default MainEditarHist