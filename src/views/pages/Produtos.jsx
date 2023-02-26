import Footer from "../partials/Fotter";
import Menu from "../partials/Menu";
import Horario from "../partials/Horario";
import ProdutosBanner from "../../components/Produtos/ProdutosBanner";
import ProdutosSearch from "../../components/Produtos/ProdutosSearch";
import ProdutosItems from "../../components/Produtos/ProdutosItems";

function Produtos() {
  return (
    <>
      <Horario />
      <Menu />
      <ProdutosBanner />
      <ProdutosSearch />
      <ProdutosItems />
      <Footer />
    </>
  );
}

export default Produtos;
