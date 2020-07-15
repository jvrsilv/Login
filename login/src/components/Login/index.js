import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles.css';

import api from '../../services/api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function fazerLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('login', { email, password });
            localStorage.setItem('id', response.data.id);
            localStorage.setItem('email', response.data.email);
            localStorage.setItem('name', response.data.name);
            history.push('/home');
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div className="container-Login">
            <strong>Login</strong>
            <form onSubmit={fazerLogin}>
                <div>
                    <input id="email" type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                    <FaEnvelope className="icon" />
                </div>

                <div>
                    <input id="password" type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                    <FaLock className="icon" />
                </div>

                <p id="forgotpass">Esqueci minha senha</p>

                {email !== '' && password.length >= 4 ?
                    <button id="btnEnviar" type="submit">Entrar</button>
                    :
                    <button disabled id="btnEnviar" type="submit">Entrar</button>
                }

                <div id="reg">
                    <p>Não tem uma conta? <Link className="register" to="/user">Registre-se</Link> </p>
                </div>
            </form>

        </div>
    );
}


export default Login;