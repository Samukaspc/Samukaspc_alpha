import React, { useRef, useState } from 'react';
import { Box, BoxButton, BoxForm, BoxInput, BoxSpan, BoxStart, Container } from "./styled";
import { criarProduto } from '../../../service';

export default function CriarProduto({ onClose }) {
    const nameRef = useRef(null);
    const descriptionRef = useRef(null);
    const priceRef = useRef(null);
    const stockRef = useRef(null);
    const [buttonClicked, setButtonClicked] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const data = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            price: parseFloat(priceRef.current.value.replace(',', '.')),
            stock: parseInt(stockRef.current.value, 10)
        };
    
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Token de autenticação não encontrado. Por favor, faça o login novamente.');
            return; 
        }
    
        try {
            await criarProduto(data, token);
    
            nameRef.current.value = '';
            descriptionRef.current.value = '';
            priceRef.current.value = '';
            stockRef.current.value = '';
    
            alert('Produto cadastrado com sucesso!');
    
            if (buttonClicked === 'saveAndExit' && onClose) {
                onClose();
            }
        } catch (error) {
            console.error('Erro ao fazer cadastro:', error);
            alert('Erro ao fazer cadastro, tente novamente');
        }
    };

    const formatPreco = (event) => {
        const input = event.target;
        let value = parseFloat(input.value.replace(',', '.'));
        if (!isNaN(value)) {
            input.value = value.toFixed(2).replace('.', ',');
        }
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <h1>Cadastrar produto</h1>
                <Box>
                    <BoxStart>
                        <span>Nome do Produto</span>
                        <input ref={nameRef} required id="name" name="name" type="text" placeholder="Nome do Produto" />
                        <span>Descrição</span>
                        <textarea ref={descriptionRef} required id="description" name="description" type="text" placeholder="Descrição" rows="6" />
                        <BoxForm>
                            <BoxSpan>
                                <span>Preço</span>
                                <BoxInput>
                                    <input ref={priceRef} required id="price" name="price" type="text" placeholder="Preço" step="0.01" min="0" onBlur={formatPreco} />
                                </BoxInput>
                            </BoxSpan>
                            <BoxSpan>
                                <span>Quantidade em estoque</span>
                                <BoxInput>
                                    <input ref={stockRef} required id="stock" name="stock" type="number" placeholder="150" min="0" />
                                </BoxInput>
                            </BoxSpan>
                        </BoxForm>
                    </BoxStart>
                </Box>
                <BoxButton>
                    <button
                        type="submit"
                        onClick={() => setButtonClicked('saveAndExit')}
                    >
                        Salvar e sair
                    </button>
                    <button
                        type="submit"
                        onClick={() => setButtonClicked('save')}
                    >
                        Salvar
                    </button>
                </BoxButton>
            </form>
        </Container>
    );
}
