import { useState, useEffect } from "react"
import axios from 'axios'
import { URL_CLIENTES } from '../../constants/clientes'
import { Table } from 'react-bootstrap'
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const VerCliente = () => {

  const [datos, setDatos] = useState([])

  const getDatos = async () => {
    let response = await axios.get(URL_CLIENTES)
    console.log(response.data)
    setDatos(response.data)
  }

  const handleChange = async (id) => {
    console.log(id);
    let response = await axios.delete("http://localhost:3000/clientes/eliminar/" + id)
    getDatos()
    if (response) {
      alert("Cliente eliminado con exito")
    }
  }


  useEffect(() => {
    getDatos()
  }, [])

  return (
    <div>
      <br /><br />
      <h3>Listado de Clientes</h3>
      <br />
      <Link to="/clientes/agregar" className="btn btn-success" float-right>Agregar</Link>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre completo</th>
            <th>Direccion</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>acciones</th>
          </tr>
        </thead>
        <tbody>

          {datos.map((dato) =>
            <tr key={dato.id_cliente}>

              <td>{dato.nom_ap}</td>
              <td>{dato.direccion}</td>
              <td>{dato.email}</td>
              <td>{dato.telefono}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleChange(dato.id_cliente)} ><FaTrash /></button>
                <Link to={`/clientes/editar/${dato.id_cliente}`} className="btn btn-warning"><FaEdit /></Link>
                <Link to={`/clientes/ver/${dato.id_cliente}`} className="btn btn-info" ><FaEye /></Link>
              </td>

            </tr>)}

        </tbody>
      </Table >

    </div >
  )
}

export default VerCliente;