import { Table, Container, Button } from "react-bootstrap";
import "../../assets/css/Admin/tableX.css";

function TableX() {
  return (
    <>
      <Container
        className="
        d-flex
        flex-column
        align-items-start
        justify-content-center
        h-100
        w-100
        "
      >
        <Button className="mb-2" variant="outline-dark">
          Adicionar produto 📦
        </Button>
        <Table bordered hover>
          <thead className="borderTable">
            <tr>
              <th>Produto</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody className="borderTable">
            <Button variant="outline-danger">Excluir</Button>
            <Button variant="outline-dark" className="m-1">
              Atualizar
            </Button>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default TableX;
