import React, { useState } from 'react'
import { login } from '../../servicios/loginservice';
import { useNavigate } from 'react-router-dom';

const Main_login = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const loginUser = async () => {
        const result = await login(usuario, password)
        if (result) {
            navigate('/inicio')
        } else {
            alert('Usuario incorrecto')
        }
    }

    return (
        <div>
            <div className='container'>
                <div class="form-group">
                    <label for="usuario">Nombre de usuario</label>
                    <input type="email" class="form-control" id="usuario" placeholder="Usuario" value={usuario} onChange={(e) => {
                        setUsuario(e.target.value);
                    }} />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password" value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                </div>
                <button type="submit" class="btn btn-primary" onClick={loginUser}>Iniciar Sesion</button>
            </div>
        </div>
    )
}

export default Main_login