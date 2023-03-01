import "../../assets/css/Produtos/produtosSearch.css";
import Lupa from "../../assets/img/lupa.png";

function produtosSearch({ set_pesquisa }) {
   return (
      <div className="search-bg">
         <input onChange={(e) => set_pesquisa(e.target.value)} type="search" placeholder="Pesquisar" />
         <img src={Lupa} alt="Lupa de pesquisa" />
      </div>
   );
}
export default produtosSearch;
