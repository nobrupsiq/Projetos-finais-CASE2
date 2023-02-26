import "../../assets/css/Partials/menu.css";
import logo from "../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <div className="container">
        <NavLink to="/">
          <img src={logo} alt="Logotipo" />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/produtos">produtos</NavLink>
          </li>
          <li>
            <NavLink to="/sobre">sobre</NavLink>
          </li>
          <li>
            <NavLink to="/contato">contato</NavLink>
          </li>
          <li>
            <NavLink to="/login">login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
