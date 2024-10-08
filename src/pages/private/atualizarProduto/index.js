import React, { useEffect, useState } from 'react';
import { Box, BoxButton, BoxForm, BoxInput, BoxSpan, BoxStart, Container } from './styled';
import { atualizarProduto } from '../../../service/produtoService';
import Alert from '../../../component/alerta';
import Button from '../../../component/button';
import Input from '../../../component/input';
import InputValue from '../../../component/inputValor';
import { formatPreco } from '../../../utils/formatPrice';

export default function AtualizarProduto({ dataProduto, onClose }) {
    const [buttonClicked, setButtonClicked] = useState('');
    const [alert, setAlert] = useState({ type: '', message: '' });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {
            name: formData.get('name'),
            description: formData.get('description'),
            price: parseFloat(formData.get('price').replace(',', '.')),
            stock: parseInt(formData.get('stock'), 10)
        };

        try {
            await atualizarProduto(dataProduto.id, data);
            setAlert({ type: 'success', message: 'Produto atualizado com sucesso!' });

            if (buttonClicked && onClose) {
                onClose();
            }
        } catch (error) {
            setAlert({ type: 'error', message: 'Erro ao atualizar o produto, tente novamente.' });
        }
    };


    useEffect(() => {
        if (dataProduto) {
            document.getElementById('name').value = dataProduto.name || '';
            document.getElementById('description').value = dataProduto.description || '';
            document.getElementById('price').value = dataProduto.price ? dataProduto.price.toFixed(2).replace('.', ',') : '';
            document.getElementById('stock').value = dataProduto.stock || '';
        }
    }, [dataProduto]);

    return (
        <Container>
            {alert.message && <Alert type={alert.type} message={alert.message} onClose={() => setAlert({ type: '', message: '' })} />}
            
            <form onSubmit={handleSubmit}>
                <h1>Editar produto</h1>
                <Box>
                    <BoxStart>
                        <span>Nome do Produto</span>
                        <Input required id="name" name="name" type="text" placeholder="Nome do Produto" />
                        <span>Descrição</span>
                        <textarea required id="description" name="description" type="text" placeholder="Descrição" rows="6" />
                        <BoxForm>
                            <BoxSpan>
                                <span>Preço</span>
                                <BoxInput>
                                    <InputValue required id="price" name="price" type="text" placeholder="Preço" step="0.01" min="0" onBlur={formatPreco} />
                                </BoxInput>
                            </BoxSpan>
                            <BoxSpan>
                                <span>Quantidade em estoque</span>
                                <BoxInput>
                                    <Input required id="stock" name="stock" type="number" placeholder="150" min="0" />
                                </BoxInput>
                            </BoxSpan>
                        </BoxForm>
                    </BoxStart>
                </Box>
                <BoxButton>
                    <Button 
                        cor={'#5d46e2'}
                        width={'200px'}
                        type="submit"
                        onClick={() => setButtonClicked('saveAndExit')}
                    >
                        Salvar e sair
                    </Button>
                </BoxButton>
            </form>
        </Container>
    );
}
