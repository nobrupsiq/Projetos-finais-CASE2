import '../../assets/css/Partials/menu.css';
import logo from '../../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <div className="container">
        <NavLink to="/Projetos-finais-CASE2">
          <img src={logo} alt="Logotipo" />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/Projetos-finais-CASE2/produtos">produtos</NavLink>
          </li>
          <li>
            <NavLink to="/Projetos-finais-CASE2/sobre">sobre</NavLink>
          </li>
          <li>
            <NavLink to="/Projetos-finais-CASE2/contato">contato</NavLink>
          </li>
          <li>
            <NavLink to="/Projetos-finais-CASE2/login">login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
