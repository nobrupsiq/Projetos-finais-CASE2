import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../views/pages/Home';
import Produtos from '../views/pages/Produtos';
import Contato from '../views/pages/Contato';
import Sobre from '../views/pages/Sobre';
import Login from '../views/pages/Login';
import Admin from '../views/pages/Admin';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Projetos-finais-CASE2" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
