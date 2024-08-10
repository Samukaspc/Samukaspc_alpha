import React, { useState } from 'react';
import { Box, BoxCadastro, BoxStart, Container } from './styled';
import logo from '../../image/login.png';
import { useNavigate } from 'react-router-dom';
import { login } from '../../service/autenticacaoService';
import Alert from '../../component/alerta';
import Button from '../../component/button';
import Input from '../../component/input';

export default function Login() {
    const navigate = useNavigate();
    const [alert, setAlert] = useState({ type: '', message: '' });

    const showAlert = (type, message) => {
        setAlert({ type, message });
    };

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        try {
            const response = await login(data.taxNumber, data.password);
            localStorage.setItem('token', response.data.token);
            navigate('/buscarTodosProdutos');
        } catch (error) {
            showAlert('error', error.message || 'Erro desconhecido');
        }
    }

    const closeAlert = () => setAlert({ type: '', message: '' });

    return (
        <>
            {alert.message && <Alert type={alert.type} message={alert.message} onClose={closeAlert} />}
        <Container>
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Logo" width={200} />
                <Box>
                    <BoxStart>
                        <span>Login</span>
                        <Input width={'300px'} type="text" name="taxNumber" id="taxNumber" placeholder="Usuário" required />
                        <span>Senha</span>
                        <Input width={'300px'} type="password" name="password" id="password" placeholder="Senha" required /> 
                    </BoxStart>
                        <Button   width={'325px'} >Login</Button> 
                    <BoxCadastro>
                        <span>Ainda não possui cadastro?</span>
                        <a href="/cadastro">  Clique aqui e cadastre-se</a>
                    </BoxCadastro>
                </Box>
            </form>
        </Container>
        </>

    );
}
