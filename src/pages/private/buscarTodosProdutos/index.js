import { useEffect, useState } from "react";
import axios from "axios";
import { BoxHeader, BoxIcon, Container, Table } from "./styled";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Modal from "../../../component";
import Cadastro from "../../cadastro";

export default function BuscarTodosProdutos() {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [produtoId, setProdutoId] = useState('');


    const buscarProdutos = async () => {
        try {
            const response = await axios.get('https://interview.t-alpha.com.br/api/products/get-all-products', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log('Dados recebidos:', response.data);

            if (response.data && response.data.data && Array.isArray(response.data.data.products)) {
                setProdutos(response.data.data.products);
            } else {
                console.error('Dados recebidos não contêm a chave "products" ou não é um array');
                setError('Dados recebidos não contêm a chave "products" ou não é um array');
            }
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
            setError('Erro ao buscar produtos');
        } finally {
            setLoading(false);
        }
    };

    const buscarProdutoId = async (id) => {
        setLoading(true);
        try {
            const response = await axios.get(`https://interview.t-alpha.com.br/api/products/get-one-product/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            console.log('Dados recebidos:', response.data);

            if (response.data && response.data.data && response.data.data.product) {
                setProdutos([response.data.data.product]);
            } else {
                console.error('Dados recebidos não contêm a chave "product"');
                setError('Dados recebidos não contêm a chave "product"');
                setProdutos([]);
            }
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
            setError('Erro ao buscar produto');
            setProdutos([]);
        } finally {
            setLoading(false);
        }
    };

    const handleBuscarProduto = () => {
        if (produtoId) {
            buscarProdutoId(produtoId);
        } else {
            setError('Por favor, insira um código de produto.');
        }
    };

    useEffect(() => {
        buscarProdutos();
    }, []);

    if (loading) {
        return (
            <Container>
                <h1>Carregando...</h1>
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <h1>{error}</h1>
            </Container>
        );
    }

    if (produtos.length === 0) {
        return (
            <Container>
                <h1>Nenhum produto encontrado.</h1>
            </Container>
        );
    }


    const deletarProduto = async (id) => {
        console.log('chamou a função de deletar produto', id);
        try {
            await axios.delete(`https://interview.t-alpha.com.br/api/products/delete-product/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setProdutos(produtos.filter((produto) => produto.id !== id));
        } catch (error) {
            console.error('Erro ao deletar produto:', error);
        }
    }

    return (
        <Container>
            <BoxHeader>
                <input
                    type="text"
                    placeholder="Código do produto"
                    value={produtoId}
                    onChange={(e) => setProdutoId(e.target.value)}
                />
                <button onClick={handleBuscarProduto}>Buscar Produto</button>
                <button >Cadastrar produto</button>

            </BoxHeader>

            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Estoque</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.name}</td>
                            <td>{produto.description}</td>
                            <td>R$ {produto.price.toFixed(2).replace('.', ',')}</td>
                            <td>{produto.stock}</td>
                            <td>
                                <BoxIcon>
                                    <div>
                                        <MdOutlineDelete color={'red'} size={40} onClick={() => deletarProduto(produto.id)} />
                                    </div>
                                    <FaRegEdit size={30} color={'blue'}  />
                                </BoxIcon>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
