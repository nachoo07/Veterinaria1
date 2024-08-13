import { useState, useEffect } from "react"
import axios from 'axios'
import { URL_HISTORIAL } from '../../constants/historialMed'
import { Table } from 'react-bootstrap'
import { FaTrash } from "react-icons/fa";

import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const VerHistorial = () => {

    const [datos, setDatos] = useState([])
    

    const getDatos = async () => {
        let response = await axios.get(URL_HISTORIAL)
        console.log(response.data)
        setDatos(response.data)
    }

    const handleChange = async (id) => {
        console.log(id);
        let response = await axios.delete("http://localhost:3000/historial_med/eliminar/" + id)
        getDatos()
        if (response) {
            alert("Historial Medico eliminado con exito")           
        }
    }


    useEffect(() => {
        getDatos()
    }, [])

    return (
        <div>
            <br /><br />
            <h3>Historial Medico</h3>
            <br />
            <Link to="/historial_med/agregar" className="btn btn-success" float-right>Agregar</Link>
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre completo</th>
                        <th>Enfermedad</th>
                        <th>Alergia</th>
                        <th>Medicina</th>
                        <th>Dosis</th>
                        <th>acciones</th>
                    </tr>
                </thead>
                <tbody>

                    {datos.map((dato) =>
                        <tr key={dato.id_HistorialMed}>

                            <td>{dato.nomYape_cliente}</td>
                            <td>{dato.enfermedades}</td>
                            <td>{dato.alergias}</td>
                            <td>{dato.medicinas}</td>
                            <td>{dato.dosis}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleChange(dato.id_HistorialMed)} ><FaTrash /></button>
                                <Link to={`/historial_med/editar/${dato.id_HistorialMed}`} className="btn btn-warning"><FaEdit /></Link>
                               
                            </td>

                        </tr>)}

                </tbody>
            </Table >

        </div >
    )
}

export default VerHistorial;