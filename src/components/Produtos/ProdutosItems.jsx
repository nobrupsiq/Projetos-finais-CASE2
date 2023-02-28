import CardX from "./Card";
import "../../assets/css/Produtos/produtosItems.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

let categorias = [
   "Alimentos",
   "Beleza-e-perfumaria",
   "Bebidas",
   "Bebidas-alcoolicas",
   "Limpeza",
   "Bebes-e-criancas",
   "Cuidados-pessoais",
   "Suplementos-alimentares",
   "Eventos-e-festas",
   "Utensilios-e-descartaveis",
   "Petshop",
];

function ProdutosItems() {
   const [list, setLista] = useState([]);

   useEffect(() => {
      axios.get("http://localhost:3000/carrinho?_page=1&_limit=50").then((e) => {
         let get_lista = e.data;
         setLista(get_lista);
      });
   }, []);

   function categoria(name_category) {
      axios.get("http://localhost:3000/carrinho?_page=1&_limit=50&category=" + name_category).then((e) => {
         setLista(e.data);
      });
   }

   return (
      <>
         {/* <div className="categoria-btn">
        <input type="button" value="categoria" />
      </div> */}

         <DropdownButton
            variant="btn btn-outline-dark"
            className="categoria-btn"
            id="dropdown-basic-button"
            title="Categorias"
         >
            {categorias.map((e, i) => {
               return (
                  <Dropdown.Item key={i} onClick={() => categoria(e)}>
                     {e.replace(/-/g, " ")}
                  </Dropdown.Item>
               );
            })}
         </DropdownButton>

         <div className="cards">
            {list.map((e, i) => {
               return <CardX {...e} key={i} />;
            })}
         </div>
      </>
   );
}

export default ProdutosItems;
