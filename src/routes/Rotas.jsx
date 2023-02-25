import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../views/pages/Home";
import Produtos from "../views/pages/Produtos";
import Contato from "../views/pages/Contato";
import Sobre from "../views/pages/Sobre";
import Login from "../views/pages/Login";

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
        {/* <Route path="/admin/produtos" element={<Admin-produtos />} />
        <Route path="/admin/produtos/adicionar" element={<Admin-produtos-add />} />
        <Route path="/admin/produtos/atualizar" element={<Admin-produtos-att />} />
        <Route path="/admin/produtos/deletar" element={<Admin-produtos-del />} />
        <Route path="/admin/sobre" element={<Admin-sobre />} />
        <Route path="/admin/sobre/adicionar" element={<Admin-sobre-add />} />
        <Route path="/admin/sobre/atualizar" element={<Admin-sobre-att />} />
        <Route path="/admin/sobre/deletar" element={<Admin-sobre-del />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
