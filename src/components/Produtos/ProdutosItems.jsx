import CardX from "./Card";
import "../../assets/css/Produtos/produtosItems.css";

function ProdutosItems() {
  return (
    <>
      <div className="categoria-btn">
        <input type="button" value="categoria" />
      </div>
      <CardX />
    </>
  );
}

export default ProdutosItems;
