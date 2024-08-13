const buscarUsuarios= async () => {
    const response = await fetch(`${process.env.BACKEND_URL}/usuarios`)
    let data = await response.json()
    return data;
}

const crearUsuario = async (nombre, contrasena,rol,email) => {
    const response = await fetch(`${process.env.BACKEND_URL}/usuarios/crearUsuario`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre,
            contrasena,
            rol,
            email
        })
    })
    if (response.status == 200) {
        return true;
    }
    else {
        return false;
    }
}

const borarUsuario = async (id_usuario) => {
    const response = await fetch(`${process.env.BACKEND_URL}/usuarios/eliminarUsuario/${id_usuario}`, {
        method: 'DELETE',
    })
    if (response.status == 200) {
        return true;
    }
    else {
        return false;
    }
}

const singleUsuario = async(id_usuario)=>{
    const response = await fetch(`${process.env.BACKEND_URL}/usuarios/${id_usuario}`)
    let data = await response.json()
    return data
}
const editUsuario=async(id_usuario, nombre,contrasena,rol,email)=>{
    const response = await fetch(`${process.env.BACKEND_URL}/usuarios/editarUsuario/${id_usuario}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre,
            contrasena,
            rol,
            email
        })
    })
    if (response.status == 200) {
        return true;
    }
    else {
        return false;
    }
}
export {buscarUsuarios,crearUsuario,singleUsuario,editUsuario, borarUsuario}