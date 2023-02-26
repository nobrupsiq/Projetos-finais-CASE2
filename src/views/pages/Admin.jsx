import AdminConteudo from "../../components/Admin/AdminConteudo";
import MenuAdmin from "../../components/Admin/MenuAdmin";
import Footer from "../partials/Fotter";
import TableX from "../../components/Admin/TableX";

function Admin() {
  return (
    <>
      <MenuAdmin />
      <AdminConteudo />
      <TableX />
      <Footer />
    </>
  );
}

export default Admin;
