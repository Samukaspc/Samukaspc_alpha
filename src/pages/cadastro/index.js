import React, { useState } from 'react';
import { Box, BoxStart, Container } from './styled';
import { useNavigate } from 'react-router-dom';
import Alert from '../../component/alerta';
import Input from '../../component/input';
import Button from '../../component/button';
import { registrar } from '../../service';

export default function Cadastro() {
    const navigate = useNavigate();
    const [alert, setAlert] = useState({ type: '', message: '' });

    const showAlert = (type, message) => {
        setAlert({ type, message });
    };

    async function handleSubmit(event) {
        event.preventDefault();
        setAlert({ type: '', message: '' });

        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        if (data.taxNumber.length !== 11) {
            showAlert('error', 'O CPF/CNPJ deverá ter 11 caracteres');
            return;
        }
        if (data.phone.length < 10 || data.phone.length > 11) {
            showAlert('error', 'O telefone deverá ter no mínimo 10 caracteres');
            return;
        }
        if (data.password.length < 6) {
            showAlert('error', 'A senha deve conter no mínimo 6 caracteres');
            return;
        }
        if (data.password !== data.confirmPassword) {
            showAlert('error', 'As senhas não são iguais');
            return;
        } else {
            delete data.confirmPassword;
        }

        try {
            await registrar(data);
            showAlert('success', 'Cadastro realizado com sucesso');
            event.target.reset();
            navigate('/')
        } catch (error) {
            showAlert('error', error.message || 'Erro desconhecido');
        }
    }

    const closeAlert = () => setAlert({ type: '', message: '' });

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                {alert.message && <Alert type={alert.type} message={alert.message} onClose={closeAlert} />}
                <h1>Cadastrar usuário</h1>
                <Box>
                    <BoxStart>
                        <span>Nome completo</span>
                        <Input width={'300px'} required id="name" name="name" type="text" placeholder="João da Silva" />
                        <span>CPF ou CNPJ</span>
                        <Input width={'300px'} required id="taxNumber" name="taxNumber" type="text" placeholder="12345678900" />
                        <span>Senha</span>
                        <Input width={'300px'} required id="password" name="password" type="password" placeholder="*************" />
                    </BoxStart>
                    <BoxStart>
                        <span>Email</span>
                        <Input width={'300px'} required id="mail" name="mail" type="email" placeholder="joao@gmail.com" />
                        <span>Telefone</span>
                        <Input width={'300px'} required id="phone" name="phone" type="text" placeholder="(66)99999-9999" />
                        <span>Confirme a senha</span>
                        <Input width={'300px'} required id="confirmPassword" name="confirmPassword" type="password" placeholder="*************" />
                    </BoxStart>
                </Box>
                <Button width={'325px'} type={'submit'} onClick={() => navigate('/')} >Voltar</Button>
                <Button width={'325px'} type={'submit'} >Cadastrar</Button>
            </form>
        </Container>
    );
}
