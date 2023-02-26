import "../../assets/css/Admin/menuAdmin.css";
import logo from "../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";

function MenuAdmin() {
  return (
    <nav>
      <div className="container">
        <NavLink to="/">
          <img src={logo} alt="Logotipo" />
        </NavLink>
        <ul>
          <li>
            <NavLink to="/ ">logout</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MenuAdmin;
