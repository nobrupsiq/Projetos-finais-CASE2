import '../../assets/css/Login/loginConteudo.css';
import logoLogin from '../../assets/img/logo-login.svg';

function LoginConteudo() {
  return (
    <section className="container-login">
      <img src={logoLogin} alt="" />
      <form className="login-edit">
        <label htmlFor="login">login</label>
        <input type="text" id="login" autoFocus />
        <label htmlFor="senha">senha</label>
        <input type="password" id="senha" />
        <a href="/Projetos-finais-CASE2/admin">entrar</a>
      </form>
    </section>
  );
}

export default LoginConteudo;
