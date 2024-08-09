import React, { useState } from 'react';
import axios from 'axios';
import { AletaError, Box, BoxButton, BoxStart, BoxSuccess, Container } from './styled';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        setError('');
        setSuccess('');

        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        if (data.taxNumber.length !== 11) {
            setError('O CPF/CNPJ deverá ter 11 caracteres');
            return;
        }
        if (data.phone.length < 10 || data.phone.length > 11) {
            setError('O telefone deverá ter no mínimo 10 caracteres');
            return;
        }
        if (data.password.length < 6) {
            setError('A senha deve conter no mínimo 6 caracteres');
            return;
        }
        if (data.password !== data.confirmPassword) {
            setError('As senhas não são iguais');
            return;
        } else {
            delete data.confirmPassword;
        }

        try {
            await axios.post('https://interview.t-alpha.com.br/api/auth/register', data);
            setSuccess('Cadastro realizado com sucesso');
            navigate('/');
            event.target.reset();
        } catch (error) {
            console.error('Erro ao fazer cadastro:', error);
            setError('Erro ao fazer cadastro, tente novamente');
        }
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                {error && <AletaError>{error}</AletaError>}
                {success && <BoxSuccess style>{success}</BoxSuccess>}
                <h1>Cadastrar usuário</h1>
                <Box>
                    <BoxStart>
                        <span>Nome completo</span>
                        <input required id="name" name="name" type="text" placeholder="João da Silva" />
                        <span>CPF ou CNPJ</span>
                        <input required id="taxNumber" name="taxNumber" type="text" placeholder="12345678900" />
                        <span>Senha</span>
                        <input required id="password" name="password" type="password" placeholder="*************" />
                    </BoxStart>
                    <BoxStart>
                        <span>Email</span>
                        <input required id="mail" name="mail" type="email" placeholder="joao@gmail.com" />
                        <span>Telefone</span>
                        <input required id="phone" name="phone" type="text" placeholder="(66)99999-9999" />
                        <span>Confirme a senha</span>
                        <input required id="confirmPassword" name="confirmPassword" type="password" placeholder="*************" />
                    </BoxStart>
                </Box>
                <BoxButton>
                    <button type="submit" onClick={() => navigate('/')} >Voltar</button>
                    <button type="submit">Cadastrar</button>

                </BoxButton>
                {/* <a href="/">Voltar</a> */}
            </form>
        </Container>
    );
}
