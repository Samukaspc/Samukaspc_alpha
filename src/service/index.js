import axios from 'axios';
const apiUrl = 'https://interview.t-alpha.com.br/api/products';


export const updateProduct = async (dataProduto, data) => {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('Token de autenticação não encontrado. Por favor, faça o login novamente.');
        return; 
    }

    try {
        await axios.patch(
            `${apiUrl}/update-product/${dataProduto.id}`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        alert('Produto cadastrado com sucesso!');
    } catch (error) {
        console.error('Erro ao fazer cadastro:', error);
        alert('Erro ao fazer cadastro, tente novamente');
    }
};



export const buscarProdutos = async (token) => {
    try {
        const response = await axios.get(`${apiUrl}/get-all-products`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return response.data.data.products;
    } catch (error) {
        throw new Error('Erro ao buscar produtos');
    }
};

export const buscarProdutoId = async (id, token) => {
    try {
        const response = await axios.get(`${apiUrl}/get-one-product/${id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return response.data.data.product;
    } catch (error) {
        throw new Error('Erro ao buscar produto');
    }
};

export const deletarProduto = async (id, token) => {
    try {
        await axios.delete(`${apiUrl}/delete-product/${id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
    } catch (error) {
        throw new Error('Erro ao deletar produto');
    }
};
