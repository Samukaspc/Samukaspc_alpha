import axios from 'axios';

export const atualizarProduto = async (id, data) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return; 
    }

    try {
        await axios.patch(
            `${process.env.REACT_APP_API_URL}/update-product/${id}`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        )
       
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || 'Erro desconhecido');
        }
    } 
};

export const criarProduto = async (data, token) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_URL}/create-product`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        );
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || 'Erro desconhecido');
        }
        throw new Error('Erro ao criar produto');
    }
};


export const buscarProdutos = async (token) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/get-all-products`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return response.data.data.products;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || 'Erro desconhecido');
        }
        throw new Error('Erro ao buscar produtos');
    }
};

export const buscarProdutoId = async (id, token) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/get-one-product/${id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return response.data.data.product;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || 'Erro desconhecido');
        }
        throw new Error('Erro ao buscar produto');
    }
};

export const deletarProduto = async (id, token) => {
    try {
        await axios.delete(`${process.env.REACT_APP_API_URL}/delete-product/${id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || 'Erro desconhecido');
        }
        throw new Error('Erro ao deletar produto');
    }
};


