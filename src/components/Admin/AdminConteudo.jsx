import "../../assets/css/Admin/adminConteudo.css";
import logoAdmin from "../../assets/img/admin-logo.svg";

function AdminConteudo() {
  return (
    <section className="admin-container">
      <div>
        <img src={logoAdmin} alt="Logotipo Admin" />
      </div>
      <h1>bem vindo ao painel de administrador</h1>
    </section>
  );
}

export default AdminConteudo;
