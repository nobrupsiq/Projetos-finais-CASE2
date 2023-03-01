import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Rotas from "./routes/Rotas";
import Loader from "./assets/img/loader.gif";

function App() {
   let [estilo, setEstilo] = useState({ display: "flex" });

   useEffect(() => {
      setTimeout(() => {
         setEstilo({ display: "none" });
      }, 2000);
   }, []);

   return (
      <>
         <div className="loader" style={estilo}>
            <img src={Loader} alt="" />
            <h1>carregando...</h1>
         </div>
         <Rotas />
      </>
   );
}

export default App;
