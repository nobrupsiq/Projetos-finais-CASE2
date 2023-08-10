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
        <Route path="/Projetos-finais-CASE2/produtos" element={<Produtos />} />
        <Route path="/Projetos-finais-CASE2/contato" element={<Contato />} />
        <Route path="/Projetos-finais-CASE2/sobre" element={<Sobre />} />
        <Route path="/Projetos-finais-CASE2/login" element={<Login />} />
        <Route path="/Projetos-finais-CASE2/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
