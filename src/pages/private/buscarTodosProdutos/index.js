import React, { useEffect, useState } from 'react';
import { BoxButton, BoxHeader, BoxIcon, Container, Table } from './styled';
import { MdOutlineDelete } from 'react-icons/md';
import Modal from '../../../component';
import CriarProduto from '../criarProduto';
import AtualizarProduto from '../atualizarProduto';
import { TbEdit } from 'react-icons/tb';
import { buscarProdutoId, buscarProdutos, deletarProduto } from '../../../service';

export default function BuscarTodosProdutos() {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [produtoId, setProdutoId] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [vizualizarModal, setVizualizarModal] = useState('');
    const [dataProduto, setDataProduto] = useState({});
    const token = localStorage.getItem('token');

    const handleBuscarProdutos = async () => {
        try {
            const produtos = await buscarProdutos(token);
            setProdutos(produtos);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

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
    }, [vizualizarModal, dataProduto]);

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
            <BoxHeader>
                <input
                    type="text"
                    placeholder="Código do produto"
                    value={produtoId}
                    onChange={(e) => setProdutoId(e.target.value)}
                />
                <button onClick={handleBuscarProduto}>Buscar Produto</button>
                <button onClick={() => { setOpenModal(true); setVizualizarModal('CriarProduto'); }}>Cadastrar produto</button>
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
                                        <MdOutlineDelete color={'red'} size={40} onClick={() => handleDeleteProduct(produto.id)} />
                                    </div>
                                    <BoxButton>
                                        <TbEdit size={20} onClick={() => handleEditProduct(produto)} />
                                    </BoxButton>
                                </BoxIcon>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Modal isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)} width={600}>
                {vizualizarModal === 'CriarProduto' ? <CriarProduto /> : <AtualizarProduto dataProduto={dataProduto} />}
            </Modal>
        </Container>
    );
}
