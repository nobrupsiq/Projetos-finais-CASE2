import CardX from "./Card";
import "../../assets/css/Produtos/produtosItems.css";
import { useEffect, useState } from "react";
import axios from "axios";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

let categorias = [
   "alimentos",
   "beleza-e-perfumaria",
   "bebidas",
   "bebidas-alcoolicas",
   "limpeza",
   "bebes-e-criancas",
   "cuidados-pessoais",
   "suplementos-alimentares",
   "eventos-e-festas",
   "utensilios-e-descartaveis",
   "petshop",
];

// http://localhost:3000/carrinho?name_like=Pizza

function ProdutosItems({ pesquisa_n }) {
   const [list, setLista] = useState([]);
   const [pesquisa, setPesquisa] = useState(pesquisa_n);

   useEffect(() => {
      setPesquisa(pesquisa_n);

      let url =
         pesquisa_n == ""
            ? "http://localhost:3000/carrinho?_page=1&_limit=48"
            : "http://localhost:3000/carrinho?_page=1&_limit=48&name_like=" + pesquisa;

      axios.get(url).then((e) => {
         let get_lista = e.data;
         setLista(get_lista);
      });
   }, [pesquisa_n]);

   // useEffect(() => {

   //    // setPesquisa(pesquisa_n)

   //    axios
   //       .get("http://localhost:3000/carrinho?_page=1&_limit=48&name_like="+pesquisa)
   //       .then((e) => {
   //          let get_lista = e.data;
   //          setLista(get_lista);
   //       });
   // }, []);

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

         <DropdownButton variant="btn" className="categoria-btn" id="dropdown-basic-button" title="categorias">
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
