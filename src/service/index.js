import axios from 'axios';
const apiUrl = 'https://interview.t-alpha.com.br/api/products';
const apiUrlAuth = 'https://interview.t-alpha.com.br/api/auth';


export const updateProduct = async (id, data) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return; 
    }

    try {
        await axios.patch(
            `${apiUrl}/update-product/${id}`,
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
            `${apiUrl}/create-product`,
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
        const response = await axios.get(`${apiUrl}/get-all-products`, {
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
        const response = await axios.get(`${apiUrl}/get-one-product/${id}`, {
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
        await axios.delete(`${apiUrl}/delete-product/${id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || 'Erro desconhecido');
        }
        throw new Error('Erro ao deletar produto');
    }
};
export const login = async (taxNumber, password) => {
    try {
        const response = await axios.post(`${apiUrlAuth}/login`, {
            taxNumber,
            password,
        });

        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || 'Erro desconhecido');
        }
        throw new Error('Erro ao tentar autenticar');
    }
};


export const register = async (data) => {
    try {
        const response = await axios.post(`${apiUrlAuth}/register`, data);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || 'Erro desconhecido');
        }
        throw new Error('Erro ao tentar registrar');
    }
};


