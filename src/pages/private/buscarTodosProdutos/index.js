import React, { useEffect, useState, useCallback } from 'react';
import { BoxEnd, BoxHeader, Container, Table, SearchBox, Header } from './styled';
import { MdDelete, MdEditSquare, MdSearch } from 'react-icons/md';
import CriarProduto from '../criarProduto';
import AtualizarProduto from '../atualizarProduto';
import { buscarProdutoId, buscarProdutos, deletarProduto } from '../../../service';
import Pagination from '../../../component/paginacao';
import Modal from '../../../component/modal';
import { useNavigate } from 'react-router-dom';

export default function BuscarTodosProdutos() {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [produtoId, setProdutoId] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [vizualizarModal, setVizualizarModal] = useState('');
    const [dataProduto, setDataProduto] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const token = localStorage.getItem('token');
    const navigate = useNavigate()


    const handleBuscarProdutos = useCallback(async () => {
        try {
            const produtos = await buscarProdutos(token);
            setProdutos(produtos);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, [token]);

    const handleBuscarProdutoId = async (id) => {
        setLoading(true);
        try {
            const produto = await buscarProdutoId(id, token);
            setProdutos([produto]);
        } catch (error) {
            setError(error.message);
            setProdutos([]);
        } finally {
            setLoading(false);
        }
    };

    const handleBuscarProduto = () => {
        if (produtoId) {
            handleBuscarProdutoId(produtoId);
        } else {
            setError('Por favor, insira um código de produto.');
        }
    };

    useEffect(() => {
        handleBuscarProdutos();
    }, [vizualizarModal, dataProduto, handleBuscarProdutos]);

    const handleEditProduct = async (produto) => {
        setDataProduto(produto);
        setOpenModal(true);
        setVizualizarModal('AtualizarProduto');
    };

    const handleDeleteProduct = async (id) => {
        try {
            await deletarProduto(id, token);
            setProdutos(produtos.filter((produto) => produto.id !== id));
        } catch (error) {
            setError(error.message);
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setVizualizarModal('');
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const desconectarUsuario = () => {
        const currentItems = produtos.slice(indexOfFirstItem, indexOfLastItem);
        
        if (currentItems.length === 1) {
            handleBuscarProdutos()
        } else {
            navigate('/')
        }
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = produtos.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(produtos.length / itemsPerPage);

    if (loading) {
        return <Container><h1>Carregando...</h1></Container>;
    }

    if (error) {
        return <Container><h1>{error}</h1></Container>;
    }

    if (produtos.length === 0) {
        return <Container><h1>Nenhum produto encontrado.</h1></Container>;
    }

    return (
        <Container>
            <h1>Tabela de produtos</h1>
            <Header>
                <button onClick={() => { setOpenModal(true); setVizualizarModal('CriarProduto'); }}>Cadastrar Produto</button>
                <SearchBox>
                    <input
                        type="text"
                        placeholder="Pesquisar Produto"
                        value={produtoId}
                        onChange={(e) => setProdutoId(e.target.value)}
                    />
                    <MdSearch size={24} onClick={handleBuscarProduto} style={{ cursor: 'pointer', color: '#007bff' }} />
                </SearchBox>
                <button onClick={desconectarUsuario} >{produtos.length === 1 ? 'Voltar' : 'Sair'}</button>
            </Header>


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
                    {currentItems.map((produto) => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.name}</td>
                            <td>{produto.description}</td>
                            <td>R$ {produto.price.toFixed(2).replace('.', ',')}</td>
                            <td>{produto.stock}</td>
                            <td>
                                <BoxEnd>
                                    <button onClick={() => handleDeleteProduct(produto.id)} >
                                        <MdDelete color={'#ff0000'} size={24} />
                                    </button>
                                    <button onClick={() => handleEditProduct(produto)} >
                                        <MdEditSquare color={'#008000'} size={24} />
                                    </button>
                                </BoxEnd>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <BoxHeader>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </BoxHeader>

            <Modal isOpen={openModal} setOpenModal={handleCloseModal} width={600}>
                {vizualizarModal === 'CriarProduto' ? <CriarProduto onClose={handleCloseModal} /> : <AtualizarProduto dataProduto={dataProduto} onClose={handleCloseModal} />}
            </Modal>
        </Container>
    );
}
