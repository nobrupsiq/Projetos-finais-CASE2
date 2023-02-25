import "../assets/css/menu.css";
import logo from "../assets/img/logo.svg";

function Menu() {
  return (
    <nav>
      <div className="container">
        <img src={logo} alt="Logotipo" />
        <ul>
          <li>
            <a href="produtos">produtos</a>
          </li>
          <li>
            <a href="contato">contato</a>
          </li>
          <li>
            <a href="sobre">sobre</a>
          </li>
          <li>
            <a href="login">login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
