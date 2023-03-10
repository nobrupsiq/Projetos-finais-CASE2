import Horario from "../../views/partials/Horario";
import Menu from "../partials/Menu";
import Banner from "../../components/Home/Banner";
// import Destaques from "../../components/Home/Destaques";
import Newsletter from "../../components/Home/Newsletter";
import Footer from "../partials/Fotter";
import DestaquesCards from "../../components/Home/DestaquesCards";

function Home() {
   return (
      <>
         <Horario />
         <Menu />
         <Banner />
         <DestaquesCards />
         <Newsletter />
         <Footer />
      </>
   );
}

export default Home;
