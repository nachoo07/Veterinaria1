const buscarMascotas= async () => {
    const response = await fetch(`${process.env.BACKEND_URL}/mascotas`)
    let data = await response.json()
    data = data.map(m => {
        m.fecha_nacimiento = m.fecha_nacimiento.slice(0,10)
        return m;
    })
    return data;
}
const crearMascota = async (nom_mascota,especie,raza,fecha_nacimiento,id_cliente) => {
    const response = await fetch(`${process.env.BACKEND_URL}/mascotas/crearMascota`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nom_mascota,
            especie,
            raza,
            fecha_nacimiento,
            id_cliente
        })
    })
    if (response.status == 200) {
        return true;
    }
    else {
        return false;
    }
}

const borrarMascota = async (id_mascota) => {
    const response = await fetch(`${process.env.BACKEND_URL}/mascotas/eliminarMascota/${id_mascota}`, {
        method: 'DELETE',
    })
    if (response.status == 200) {
        return true;
    }
    else {
        return false;
    }
}

const singleMascota = async(id_mascota)=>{
    const response = await fetch(`${process.env.BACKEND_URL}/mascotas/${id_mascota}`)
    let data = await response.json()
    data.fecha_nacimiento = data.fecha_nacimiento.slice(0,10)
    return data
}
const editMascota=async(id_mascota,nom_mascota,especie,raza,fecha_nacimiento,id_cliente)=>{
    const response = await fetch(`${process.env.BACKEND_URL}/mascotas/editarMascota/${id_mascota}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
           nom_mascota,
           especie,
           raza,
           fecha_nacimiento,
           id_cliente
        })
    })
    if (response.status == 200) {
        return true;
    }
    else {
        return false;
    }
}
export { buscarMascotas,singleMascota, crearMascota ,borrarMascota,editMascota}