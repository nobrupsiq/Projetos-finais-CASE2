import Footer from "../partials/Fotter";
import Menu from "../partials/Menu";
import Horario from "../partials/Horario";
import ProdutosBanner from "../../components/Produtos/ProdutosBanner";
import ProdutosSearch from "../../components/Produtos/ProdutosSearch";
import ProdutosItems from "../../components/Produtos/ProdutosItems";
import { useState } from "react";

function Produtos() {

  let [pesquisaNome, setPesquisaNome] = useState("")

  return (
    <>
      <Horario />
      <Menu />
      <ProdutosBanner />
      <ProdutosSearch set_pesquisa={setPesquisaNome} />
      <ProdutosItems pesquisa_n={pesquisaNome}  />
      <Footer />
    </>
  );
}

export default Produtos;
