import "../../assets/css/Produtos/produtosSearch.css";
import Lupa from "../../assets/img/lupa.png";

function produtosSearch() {
  return (
    <div className="search-bg">
      <input type="search" placeholder="Pesquisar" />
      <img src={Lupa} alt="Lupa de pesquisa" />
    </div>
  );
}

export default produtosSearch;
