import "../assets/css/newsletter.css";
import carta from "../assets/img/carta.svg";

function Newsletter() {
  return (
    <section className="newsletter-bg">
      <div className="news-container">
        <div className="news-items">
          <img src={carta} alt="Carta icon" />
          <h1>newsletter</h1>
        </div>
        <p>assine e receba todas as novidades e ofertas do marketJson!</p>
      </div>
      <div className="input-box-button">
        <input type="email" id="email" placeholder="email@email.com" />
        <input type="button" value="assinar" />
      </div>
    </section>
  );
}

export default Newsletter;
