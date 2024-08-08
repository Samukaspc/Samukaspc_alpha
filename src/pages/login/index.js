import React from 'react';
import { Box, BoxButton,  BoxStart, Container } from "./styled";
import logo from "../../image/login.png";
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
          });
          console.log('Dados do cadastro:', data);

        try {
            await axios.post('https://interview.t-alpha.com.br/api/auth/login', {
                taxNumber: data.taxNumber,
                password: data.password,
            }).then((response) => {
                localStorage.setItem('token', response.data.data.token);
                navigate('/buscarTodosProdutos');
                console.log(response.data);
            })
        } catch (error) {
            console.error('Erro ao fazer login:', error)
            alert('Erro ao fazer login, tente novamente');
        }
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Logo" width={200} />
                <Box>
                    <BoxStart>
                        <span>Login</span>
                        <input
                            type="text"
                            name="taxNumber"
                            id="taxNumber"
                            placeholder="Usuário"
                            required
                        />
                    <span>Senha</span>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Senha"
                        required
                        />
                        </BoxStart>
                    <BoxButton>
                        <button type="submit" >Login</button>
                    </BoxButton>
                </Box>
            </form>
        </Container>
    );
}
