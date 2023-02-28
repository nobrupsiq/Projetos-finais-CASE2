import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import "../../assets/css/Home/destaques.css";

function Destaques({ img, name, price }) {
   return (
      <div>
         <h1 className="destaques-title">destaques</h1>
         <Carousel
            className="caroulsel-indicators2"
            style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "80px 0 120px 0" }}
         >
            <Carousel.Item interval={9000000000}>
               <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={img} />
                  <Card.Body>
                     <Card.Title>{name}</Card.Title>
                     <Card.Text>{price}</Card.Text>
                  </Card.Body>
               </Card>
            </Carousel.Item>
         </Carousel>
      </div>
   );
}

export default Destaques;
