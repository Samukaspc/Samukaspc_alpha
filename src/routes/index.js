import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/login";
import BuscarTodosProdutos from "../pages/private/buscarTodosProdutos";
import Cadastro from "../pages/cadastro";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/buscarTodosProdutos" element={<BuscarTodosProdutos />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<h1>Pagina não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}