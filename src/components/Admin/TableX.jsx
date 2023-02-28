import { Table, Container, Button } from "react-bootstrap";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

import ModalCreate from "../Modal/ModalCreate";
import "../../assets/css/Admin/tableX.css";
import "../../assets/css/Admin/addModal.css";

function TableX() {
   let [lista, setLista] = useState([]);
   let [objEdit, setObjEdit] = useState({
      id: 139689,
      name: "Chá Herbal de Erva Doce TAEQ 22,5g com 15 Saquinhos",
      price: 6.49,
      img: "https://nobrupsiq.github.io/Market-api-case2/imgs/479701.jpg",
      brand: "Taeq",
      category: "bebidas",
   });

   const [modalShow, setModalShow] = useState(false);
   const [modalShowEdit, setModalShowEdit] = useState(false);

   useEffect(() => {
      refresh_list();
   }, []);

   function refresh_list() {
      axios.get("http://localhost:3000/carrinho").then((e) => {
         console.log(e.data);
         let get_lista = e.data;
         setLista(get_lista.reverse().slice(0, 10));
      });
   }

   function db_add_element(obj) {
      axios
         .post("http://localhost:3000/carrinho", {
            name: obj.name,
            price: obj.price,
            img: obj.img,
            brand: obj.img,
            category: obj.category,
         })
         .then((e) => refresh_list());
   }

   function save() {
      let obj = {
         img: inp_img.value,
         name: inp_name.value,
         price: inp_price.value,
         brand: inp_brand.value,
         category: inp_category.value,
      };
      db_add_element(obj);
      setModalShow(false);
   }

   function refreshInfo(obj) {
      let o = {
         id: $edit_id.value,
         img: $edit_img.value,
         name: $edit_name.value,
         price: $edit_price.value,
         brand: $edit_brand.value,
         category: $edit_category.valuee,
      };
   }

   function saveEdit() {
      let o = {
         id: $edit_id.value,
         img: $edit_img.value,
         name: $edit_name.value,
         price: $edit_price.value,
         brand: $edit_brand.value,
         category: $edit_category.value,
      };

      axios.put("http://localhost:3000/carrinho/" + o.id, o).then((e) => refresh_list());
      setModalShowEdit(false);
   }

   function changeInfo(obj) {
      setTimeout(() => {
         $edit_id.value = obj.id;
         $edit_img.value = obj.img;
         $edit_name.value = obj.name;
         $edit_price.value = obj.price;
         $edit_brand.value = obj.brand;
         $edit_category.value = obj.category;
      }, 200);

      setObjEdit(obj);
      setModalShowEdit(true);
   }

   return (
      <>
         <ModalCreate show={modalShow} onHide={() => setModalShow(false)}>
            <form className="form-add">
               <label htmlFor="inp_img">imagem</label>
               <input id="inp_img" placeholder="URL" type="text" />

               <label htmlFor="inp_name">produto</label>
               <input id="inp_name" placeholder="Nome" type="text" />

               <label htmlFor="inp_brand">marca</label>
               <input id="inp_brand" placeholder="EX: Nestlê" type="text" />

               <label htmlFor="inp_price">valor</label>
               <input id="inp_price" placeholder="00.00" type="text" />

               <label htmlFor="inp_category">categoria</label>
               <input id="inp_category" placeholder="EX: petshop" type="text" />

               <button onClick={save} className="btn-salvar">
                  Salvar
               </button>
            </form>
         </ModalCreate>

         <ModalCreate show={modalShowEdit} onHide={() => setModalShowEdit(false)}>
            <form className="form-add">
               {/* <label htmlFor="$edit_id">id</label>
               <input disabled className="" id="$edit_id" placeholder="id" type="text" /> */}

               <label htmlFor="$edit_img">imagem</label>
               <input id="$edit_img" placeholder="URL" type="text" />

               <label htmlFor="edit_name">produto</label>
               <input id="$edit_name" placeholder="Nome" type="text" />

               <label htmlFor="$edit_brand">marca</label>
               <input id="$edit_brand" placeholder="EX: Nestlê" type="text" />

               <label htmlFor="$edit_pirce">valor</label>
               <input id="$edit_price" placeholder="00.00" type="text" />

               <label htmlFor="$edit_category">categoria</label>
               <input id="$edit_category" placeholder="EX: petshop" type="text" />

               <button onClick={saveEdit} className="btn-atualizar">
                  Atualizar
               </button>
            </form>
         </ModalCreate>

         <Container
            className="
        d-flex
        flex-column
        align-items-start
        justify-content-center
        h-100
        w-100
        "
         >
            <Button onClick={() => setModalShow(true)} className="mb-2" variant="outline-dark">
               Adicionar produto 📦
            </Button>

            <Table bordered hover>
               <thead className="borderTable">
                  <tr>
                     <th>Imagem</th>
                     <th>Produto</th>
                     <th>Marca</th>
                     <th>Valor</th>
                     <th>Categoria</th>
                     <th>Ações</th>
                  </tr>
               </thead>

               <tbody className="borderTable">
                  {lista.map((e, i) => {
                     return (
                        <tr key={i}>
                           <td>
                              <img width={50} src={e.img} />
                           </td>
                           <td>{e.name}</td>
                           <td>{e.brand}</td>
                           <td>R$ {e.price}</td>
                           <td>{e.category}</td>
                           <td>
                              <Button variant="outline-danger">Excluir</Button>
                              <Button variant="outline-dark" className="m-1" onClick={() => changeInfo(e)}>
                                 {" "}
                                 Atualizar{" "}
                              </Button>
                           </td>
                        </tr>
                     );
                  })}
               </tbody>
            </Table>
         </Container>
      </>
   );
}

export default TableX;
