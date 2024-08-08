import axios from "axios";
import { Box, BoxButton, BoxForm, BoxInput, BoxSpan, BoxStart, Container } from "./styled";

export default function CriarProduto() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const data = {
            name: formData.get('name'),
            description: formData.get('description'),
            price: parseFloat(formData.get('price')),
            stock: parseInt(formData.get('stock'), 10)
        };
        
        console.log('Data:', data); 
    
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Token de autenticação não encontrado. Por favor, faça o login novamente.');
            return; 
        }
    
        try {
            const response = await axios.post(
                'https://interview.t-alpha.com.br/api/products/create-product',
                data, 
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` 
                    }
                }
            );
    
            console.log('Produto cadastrado com sucesso:', response.data);
            alert('Produto cadastrado com sucesso!');
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
                    <button type="submit">Salvar</button>
                    <button type="submit">Salvar e sair</button>

                </BoxButton>
            </form>
        </Container>
    );
}