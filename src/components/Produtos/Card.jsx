import Card from "react-bootstrap/Card";
import "../../assets/css/Produtos/produtosItems.css";

function CardX({ img, name, desc, price }) {
   return (
      <Card style={{ width: "11rem" }}>
         <Card.Img
            variant="top"
            src={img}
            style={{
               width: "170px",
               objectFit: "cover",
            }}
         />
         <Card.Body
            style={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
            }}
         >
            <Card.Title>{name}</Card.Title>
            <Card.Title style={{ paddingTop: "10px", fontWeight: "600" }}>R$ {price}</Card.Title>
         </Card.Body>
      </Card>
   );
}

export default CardX;
