import axios from "axios";

export const login = async (taxNumber, password) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL_AUTH}/login`, {
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


export const registrar = async (data) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL_AUTH}/register`, data);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || 'Erro desconhecido');
        }
        throw new Error('Erro ao tentar registrar');
    }
};
