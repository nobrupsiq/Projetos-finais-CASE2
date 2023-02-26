import "../../assets/css/Login/loginConteudo.css";
import logoLogin from "../../assets/img/logo-login.svg";

function LoginConteudo() {
  return (
    <section className="container-login">
      <img src={logoLogin} alt="" />
      <form className="login-edit">
        <label htmlFor="login">login</label>
        <input type="text" id="login" />
        <label htmlFor="senha">senha</label>
        <input type="password" id="senha" />
        <button>entrar</button>
      </form>
    </section>
  );
}

export default LoginConteudo;
