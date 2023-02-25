import Carousel from "react-bootstrap/Carousel";
import market1 from "../assets/img/market1.png";
import market2 from "../assets/img/market2.png";
import market3 from "../assets/img/market3.png";
import "../assets/css/banner.css";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 img-fluid img-resize" src={market1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="h3 display-5 text-alter" style={{ fontWeight: "bold" }}>
            Inauguração do marketJson 🛒
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-resize " src={market2} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="h3 display-5 text-alter" style={{ fontWeight: "bold" }}>
            Promoções incríveis
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 img-resize" src={market3} alt="Third slide" />

        <Carousel.Caption>
          <h3 className="h3 display-5 text-alter" style={{ fontWeight: "bold" }}>
            Tudo em um só lugar
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
// <div className="Carousel-parent">
//   <Carousel style={{ height: "50vh" }}>
//     <Carousel.Item interval={3000}>
//       <div className="bloco">
//         <h1>Inauguração do marketJson 🛒</h1>
//         <p>Venha conhecer!</p>
//       </div>
//       <img src={market1} />
//     </Carousel.Item>
//     <Carousel.Item interval={3000}>
//       <div className="bloco">
//         <h1>Promoções incríveis</h1>
//       </div>
//       <img src={market2} />
//     </Carousel.Item>
//     <Carousel.Item interval={3000}>
//       <div className="bloco">
//         <h1>Tudo em um só lugar</h1>
//       </div>
//       <img src={market3} />
//     </Carousel.Item>
//   </Carousel>

export default Banner;
