import { useEffect } from 'react'
import { useState } from 'react';
import {  singleMascota } from '../../servicios/mascotasService';
import { useParams } from 'react-router-dom';
import FormMascotas from '../../componentes/mascotas/formMascotas/formMascotas';



const FormularioMascotas = () => {
    let { id_mascota } = useParams();
    const [mascota,setMascota]=useState(null);

    useEffect(() => {
        if (id_mascota) {
            singleMascota(id_mascota).then(result => {
                setMascota(result)
            })
        }
    }, [])

    return (
        <>
        
        <FormMascotas mascota={mascota} />
        </>
        
    )
}

export default FormularioMascotas