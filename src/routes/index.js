import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/login";

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
            <Route path="*" element={<h1>Pagina não encontrada</h1>} />
        </Routes>
    </BrowserRouter>
  );
}