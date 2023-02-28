import "../../assets/css/Contato/formContato.css";
import ContatoLogo from "../../assets/img/contato-logo.svg";

function FormContato() {
   return (
      <section className="container-form">
         <img src={ContatoLogo} alt="Logotipo contato" />
         <form className="form-edit">
            <label htmlFor="nome">nome</label>
            <input type="text" id="nome" autoFocus />
            <label htmlFor="email">email</label>
            <input type="text" id="email" placeholder="exemplo@email.com" />
            <label htmlFor="telefone">telefone</label>
            <input type="tel" id="telefone" placeholder="(21) 99999-9999" />
            <label htmlFor="assunto">assunto</label>
            <textarea name="assunto" id="assunto" rows={5}></textarea>
            <button>enviar</button>
         </form>
      </section>
   );
}

export default FormContato;
