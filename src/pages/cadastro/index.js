import React, { useState } from 'react';
import { Box, BoxButton, BoxStart, Container } from './styled';
import { useNavigate } from 'react-router-dom';
import Alert from '../../component/alerta';
import Input from '../../component/input';
import Button from '../../component/button';
import { registrar } from '../../service/autenticacaoService';
import { formatPhone, formatTaxNumber } from '../../utils/formatters';

export default function Cadastro() {
    const navigate = useNavigate();
    const [alert, setAlert] = useState({ type: '', message: '' });
    const [phone, setPhone] = useState('');
    const [taxNumber, setTaxNumber] = useState('');

    const showAlert = (type, message) => {
        setAlert({ type, message });
    };

    const handlePhoneChange = (event) => {
        const { value } = event.target;
        const formattedPhone = formatPhone(value);
        setPhone(formattedPhone);
    };

    const handleTaxNumberChange = (event) => {
        const { value } = event.target;
        const formattedTaxNumber = formatTaxNumber(value);
        setTaxNumber(formattedTaxNumber);
    };

    async function handleSubmit(event) {
        event.preventDefault();
        setAlert({ type: '', message: '' });

        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        data.taxNumber = data.taxNumber.replace(/\D/g, '');
        data.phone = data.phone.replace(/\D/g, '');

        if (data.taxNumber.length !== 11) {
            showAlert('error', 'O CPF deverá ter 11 dígitos');
            return;
        }
        if (data.phone.length < 10 || data.phone.length > 11) {
            showAlert('error', 'O telefone deverá ter no mínimo 10 dígitos');
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
            showAlert('success', 'Usuário cadastrado com sucesso');
            event.target.reset();
            setTimeout(() => {
                navigate('/');
            }, 200); 
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
                        <Input 
                            width={'300px'} 
                            required 
                            id="taxNumber" 
                            name="taxNumber" 
                            type="text" 
                            placeholder="123.456.789-00" 
                            value={taxNumber} 
                            onChange={handleTaxNumberChange} 
                        />
                        <span>Senha</span>
                        <Input width={'300px'} required id="password" name="password" type="password" placeholder="*************" />
                    </BoxStart>
                    <BoxStart>
                        <span>Email</span>
                        <Input width={'300px'} required id="mail" name="mail" type="email" placeholder="joao@gmail.com" />
                        <span>Telefone</span>
                        <Input 
                            width={'300px'} 
                            required 
                            id="phone" 
                            name="phone" 
                            type="text" 
                            placeholder="(66)99999-9999" 
                            value={phone} 
                            onChange={handlePhoneChange} 
                        />
                        <span>Confirme a senha</span>
                        <Input width={'300px'} required id="confirmPassword" name="confirmPassword" type="password" placeholder="*************" />
                    </BoxStart>
                </Box>
                <BoxButton>
                    <Button width={'325px'}  onClick={() => navigate('/')} >Voltar</Button>
                    <Button width={'325px'} type={'submit'} >Cadastrar</Button>
                </BoxButton>
            </form>
        </Container>
    );
}
