import "../assets/css/newsletter.css";
import carta from "../assets/img/carta.svg";

function Newsletter() {
  return (
    <section className="newsletter-bg">
      <div className="news-container">
        <div>
          <img src={carta} alt="Carta icon" />
          <h1>newsletter</h1>
        </div>
        <p>assine e receba todas as novidades e ofertas do marketJson!</p>
      </div>
      <input type="email" id="email" />
    </section>
  );
}

export default Newsletter;
