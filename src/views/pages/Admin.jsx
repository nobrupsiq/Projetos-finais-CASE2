import AdminConteudo from "../../components/Admin/AdminConteudo";
import MenuAdmin from "../../components/Admin/MenuAdmin";
import Footer from "../partials/Fotter";

function Admin() {
  return (
    <>
      <MenuAdmin />
      <AdminConteudo />
      <Footer />
    </>
  );
}

export default Admin;
