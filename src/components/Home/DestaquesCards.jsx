import { useState, useEffect } from "react";
import Destaques from "./Destaques";
import axios from "axios";

function DestaquesCards() {
   const [list, setLista] = useState([]);

   useEffect(() => {
      // axios.get("http://localhost:3000/carrinho?_page=1&_limit=100").then((e) => {
      axios.get("http://localhost:3000/carrinho").then((e) => {
         let get_lista = e.data;
         setLista(get_lista.reverse());
      });
   }, []);

   return (
      <div>
         <Destaques quantidade={4} list={list.slice(0, 50)} title="Destaque" />;
      </div>
   );
}

export default DestaquesCards;
