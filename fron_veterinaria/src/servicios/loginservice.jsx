async function login(usuario, password) {
    const response = await fetch(`${process.env.BACKEND_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            usuario,
            password
        })
    })
    if(response.status == 200){
        return true;
    }
    else{
        return false;
    }
}

export { login };