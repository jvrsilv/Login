import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaLock } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPass, setConfPass] = useState('');
    const history = useHistory();

    async function Registrar(e) {
        e.preventDefault();

        try {
            const response = await api.post('register', { name, email, password });
            localStorage.setItem('id', response.data.id);
            localStorage.setItem('email', response.data.email);
            localStorage.setItem('name', response.data.name);
            history.push('/home');
        } catch (err) {
            alert(err);
        }
    }

    return (
        <>
            <div className="container-register">
                <strong style={{ color: '#fff' }}>Registrar-se</strong>

                <form onSubmit={Registrar}>
                    <div>
                        <input id="name-register" type="text" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} autoComplete="of" />
                        <FaUser />
                    </div>

                    <div>
                        <input id="email-register" type="email" placeholder="Digite seu Email" onChange={(e) => setEmail(e.target.value)} autoComplete="of" />
                        <FaEnvelope />
                    </div>

                    <div>
                        <input id="email-register" type="password" placeholder="Sua Senha" onChange={(e) => setPassword(e.target.value)} autoComplete="of" />
                        <FaLock />
                    </div>

                    <div>
                        <input id="email-register" type="password" placeholder="Confirme sua Senha" onChange={(e) => setConfPass(e.target.value)} autoComplete="of" />
                        <FaLock />
                    </div>

                    {name && email !== '' && password.length && confPass.length >= 4 && password === confPass ?
                        <button id="btnEnviar" type="submit">Cadastrar</button>
                        :
                        <>
                            <button disabled type="submit">Cadastrar</button>
                            <p id="txtRegister">Preencha os campos corretamente para realizar seu cadastro no nosso sistema :)</p>
                        </>
                    }

                    <div id="btnVoltar">Voltar</div>
                </form>
            </div>
        </>
    );
}

export default Register;