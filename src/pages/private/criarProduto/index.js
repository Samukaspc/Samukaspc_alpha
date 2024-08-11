import React, { useState } from 'react';
import { Box, BoxButton, BoxForm, BoxInput, BoxSpan, BoxStart, Container } from "./styled";
import { criarProduto } from '../../../service/produtoService';
import Alert from '../../../component/alerta';
import Button from '../../../component/button';
import Input from '../../../component/input';
import InputValue from '../../../component/inputValor';
import { formatPreco } from '../../../utils/formatPrice';

export default function CriarProduto({ onClose }) {
    const [buttonClicked, setButtonClicked] = useState('');
    const [alert, setAlert] = useState({ type: '', message: '' });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const rawPrice = document.getElementById('price').value.replace(',', '.');
        const price = parseFloat(rawPrice);
        const stock = parseInt(document.getElementById('stock').value, 10);

        if (isNaN(price) || price <= 0) {
            setAlert({ type: 'error', message: 'Preço inválido. Por favor, informe somente números' });
            return;
        }

        if (isNaN(stock) || stock < 0) {
            setAlert({ type: 'error', message: 'Quantidade de estoque inválida. Por favor, insira um valor válido.' });
            return;
        }

        const data = {
            name,
            description,
            price,
            stock
        };

        const token = localStorage.getItem('token');
        if (!token) {
            setAlert({ type: 'error', message: 'Token de autenticação não encontrado. Por favor, faça o login novamente.' });
            return;
        }

        try {
            await criarProduto(data, token);
            document.getElementById('name').value = '';
            document.getElementById('description').value = '';
            document.getElementById('price').value = '';
            document.getElementById('stock').value = '';

            setAlert({ type: 'success', message: 'Produto cadastrado com sucesso!' });

            if (buttonClicked === 'saveAndExit' && onClose) {
                onClose();
            }
        } catch (error) {
            setAlert({ type: 'error', message: 'Erro ao fazer cadastro, tente novamente.' });
        }
    };

    const closeAlert = () => setAlert({ type: '', message: '' });

    return (
        <Container>
            {alert.message && <Alert type={alert.type} message={alert.message} onClose={closeAlert} />}
            
            <form onSubmit={handleSubmit}>
                <h1>Cadastrar produto</h1>
                <Box>
                    <BoxStart>
                        <span>Nome do Produto</span>
                        <Input width={"360px"} required id="name" name="name" type="text" placeholder="Nome do Produto" />
                        <span>Descrição</span>
                        <textarea required id="description" name="description" type="text" placeholder="Descrição" rows="6" />
                        <BoxForm>
                            <BoxSpan>
                                <span>Preço</span>
                                <BoxInput>
                                    <InputValue 
                                        width={"125px"}
                                        required id="price"
                                        name="price"
                                        type="text"
                                        placeholder="Preço"
                                        step="0.01"
                                        min="0"
                                        onBlur={formatPreco} />  
                                </BoxInput>
                            </BoxSpan>
                            <BoxSpan>
                                <span>Quantidade em estoque</span>
                                <BoxInput>
                                    <Input 
                                        width={"160px"} 
                                        type="number" 
                                        required 
                                        id="stock" 
                                        name="stock" 
                                        placeholder="150" 
                                        min="0"
                                    />
                                </BoxInput>
                            </BoxSpan>
                        </BoxForm>
                    </BoxStart>
                </Box>
                <BoxButton>
                    <Button 
                        width={"185px"}
                        cor={"#5d46e2"}
                        type="submit"
                        onClick={() => setButtonClicked('saveAndExit')}
                    >
                        Salvar e sair
                    </Button>
                    <Button 
                        width={"185px"}
                        cor={"#5d46e2"}
                        type="submit"
                        onClick={() => setButtonClicked('save')}
                    >
                        Salvar
                    </Button>
                </BoxButton>
            </form>
        </Container>
    );
}
