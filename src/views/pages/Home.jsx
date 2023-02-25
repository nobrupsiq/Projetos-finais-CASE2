import Banner from "../../components/Banner";
import Destaques from "../../components/Destaques";
import Horario from "../../components/Horario";
import Menu from "../partials/Menu";
import Newsletter from "../../components/Newsletter";
import Footer from "../partials/Fotter";

function Home() {
  return (
    <>
      <Horario />
      <Menu />
      <Banner />
      <Destaques />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
