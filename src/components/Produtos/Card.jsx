import Card from "react-bootstrap/Card";

function CardX({ img, name, desc, price }) {
   return (
      <Card style={{ width: "18rem" }}>
         <Card.Img variant="top" src={img} />
         <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text></Card.Text>
            <Card.Title>R$ {price}</Card.Title>
         </Card.Body>
      </Card>
   );
}

export default CardX;
