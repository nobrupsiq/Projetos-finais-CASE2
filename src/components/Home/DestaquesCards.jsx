import { useState, useEffect } from "react";
import Destaques from "./Destaques";
import axios from "axios";

function DestaquesCards() {
   const [list, setLista] = useState([]);

   useEffect(() => {
      axios.get("http://localhost:3000/carrinho?_page=1&_limit=10").then((e) => {
         let get_lista = e.data;
         setLista(get_lista);
      });
   }, []);
   return (
      <div>
         {list.map((e, i) => {
            return <Destaques {...e} key={i} />;
         })}
      </div>
   );
}

export default DestaquesCards;
