import React, { useEffect, useState } from 'react';
import { Box, BoxButton, BoxForm, BoxInput, BoxSpan, BoxStart, Container } from './styled';
import { updateProduct } from '../../../service';
import Alert from '../../../component/alerta';

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
            await updateProduct(dataProduto.id, data);
            setAlert({ type: 'success', message: 'Produto atualizado com sucesso!' });

            if (buttonClicked === 'saveAndExit' && onClose) {
                onClose();
            }
        } catch (error) {
            setAlert({ type: 'error', message: 'Erro ao atualizar o produto, tente novamente.' });
        }
    };

    const formatPreco = (event) => {
        const input = event.target;
        let value = parseFloat(input.value.replace(',', '.'));
        if (!isNaN(value)) {
            input.value = value.toFixed(2).replace('.', ',');
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
                        <input required id="name" name="name" type="text" placeholder="Nome do Produto" />
                        <span>Descrição</span>
                        <textarea required id="description" name="description" type="text" placeholder="Descrição" rows="6" />
                        <BoxForm>
                            <BoxSpan>
                                <span>Preço</span>
                                <BoxInput>
                                    <input required id="price" name="price" type="text" placeholder="Preço" step="0.01" min="0" onBlur={formatPreco} />
                                </BoxInput>
                            </BoxSpan>
                            <BoxSpan>
                                <span>Quantidade em estoque</span>
                                <BoxInput>
                                    <input required id="stock" name="stock" type="number" placeholder="150" min="0" />
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
