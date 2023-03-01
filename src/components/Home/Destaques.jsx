import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import "../../assets/css/Home/destaques.css";

function Destaques({ list = [], title = "nada", img = "ok", name = "20", price = "30", quantidade = 3 }) {
   function sliceitems(arralist, range) {
      console.log(arralist);

      let new_arraylist = [];
      for (let i = 0; i < arralist.length; i += range) {
         new_arraylist.push(arralist.slice(i, i + range));
         console.log(console.log(new_arraylist));
      }
      return new_arraylist;
   }

   function showcards(array_list) {
      {
         array_list.map((e, i) => {
            return (
               <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={e.img} />
                  <Card.Body>
                     <Card.Title>{e.name}</Card.Title>
                     <Card.Text>{e.price}</Card.Text>
                  </Card.Body>
               </Card>
            );
         });
      }
   }

   return (
      <div>
         <h1 className="destaques-title">{title}</h1>
         <Carousel
            className="caroulsel-indicators2"
            style={{
               display: "flex",
               justifyContent: "center",
               gap: "20px",
               padding: "80px 0 120px 0",
            }}
         >
            {sliceitems(list, quantidade).map((ar_list) => {
               return (
                  <Carousel.Item interval={9000000000}>
                     {ar_list.map((e, i) => {
                        return (
                           <Card style={{ width: "11rem" }}>
                              <Card.Img
                                 style={{
                                    width: "170px",
                                    objectFit: "cover",
                                 }}
                                 variant="top"
                                 src={e.img}
                              />
                              <Card.Body
                                 style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                 }}
                              >
                                 <Card.Title style={{ fontSize: "16px" }}>{e.name}</Card.Title>
                                 <Card.Text style={{ paddingTop: "10px", fontWeight: "600" }}>R$ {e.price}</Card.Text>
                              </Card.Body>
                           </Card>
                        );
                     })}
                  </Carousel.Item>
               );
            })}
         </Carousel>
      </div>
   );
}

export default Destaques;
