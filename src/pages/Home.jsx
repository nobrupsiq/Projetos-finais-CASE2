import Banner from "../components/Banner";
import Destaques from "../components/Destaques";
import Horario from "../components/Horario";
import Menu from "../components/Menu";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <>
      <Horario />
      <Menu />
      <Banner />
      <Destaques />
      <Newsletter />
    </>
  );
}

export default Home;
