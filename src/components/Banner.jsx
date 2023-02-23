import Carousel from "react-bootstrap/Carousel";

function Banner() {
  return (
    <Carousel variant="dark" className="conteudo-margin">
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/1500x300/c0c0c0" alt="Slide one" />
        <Carousel.Caption>
          <h5> 🚧 marketJson 🚧</h5>
          <p>TESTE</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/1500x300/C0C0C0" alt="Slide two" />
        <Carousel.Caption>
          <h5>🚧 Em construção... 🚧</h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="https://via.placeholder.com/1500x300/c0c0c0" alt="Slide three" />
        <Carousel.Caption>
          <h5>TESTE 🚧</h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
