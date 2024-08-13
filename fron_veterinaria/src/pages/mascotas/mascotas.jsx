import { useEffect, useState } from 'react'
import ListadoMascotas from '../../componentes/mascotas/listadoMascota/listadoMascotas'
import { buscarMascotas } from '../../servicios/mascotasService'
import { Link } from 'react-router-dom'
import '../../pages/mascotas/mascotas.css'

const Mascotas = () => {
    const [mascotas, setMascotas] = useState([])

    const traerMascotas = async () => {
        const listaMascotas = await buscarMascotas();
        setMascotas(listaMascotas);
    }

    useEffect(() => {
        traerMascotas();
    }, [])

    return (
        <div className='container'>
            <div className='m-4'>
                <Link className='boton-agregar-mascotas btn' to='/mascotas/formulario'>Agregar nuevo Paciente</Link>
            </div>
            <ListadoMascotas mascotas={mascotas} updateList={traerMascotas} />
        </div>
    )
}
export default Mascotas;