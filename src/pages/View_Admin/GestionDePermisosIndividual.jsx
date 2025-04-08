import React from "react";
import Navbar_Admin from "../../components/Navbar_Admin";
import Footer from "../../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export default function GestionDePermisosIndividual() {
  return (
    <div >
      <Navbar_Admin />
      <h1 className="text-center my-4">Gestion De Permisos Individual</h1>
      <Container>
        <Row>
          {" "}
          <p style={Tiulos}>Buscar Usuarios</p>
        </Row>
        <Row>
          <select name="" id="" style={Select}>
            <option value="" disabled>
              Seleccione un usuario
            </option>
            <option value="">Pedro manuel</option>
            <option value="">Manuel Jimenez</option>
            <option value="">Sapopeta</option>
          </select>
        </Row>

        <Row>
          <p style={Tiulos}> Permisos actuales del usuario</p>
          <ul
          // style={{
          //   border: "1px solid #ccc",
          //   padding: "10px",
          //   borderRadius: "5px",
          // }}
          >
            <li style={Listas}>Ver Documentos (heredado del grupo)</li>
            <li style={Listas}>Editar Documentos (individual)</li>
          </ul>
        </Row>

        <Row>
          <p style={Tiulos}> Asignar Permisos Individuales</p>

          <Col>
            <Form.Check
              type="checkbox"
              id="VerDocumentos"
              label="Ver documentos"
              style={CheckboxGrande}
            />
          </Col>
          <Col>
            <Form.Check
              type="checkbox"
              id="EditarDocumentos"
              label="Editar Documentos"
              style={CheckboxGrande}
            />
          </Col>
          <Col>
            <Form.Check
              type="checkbox"
              id="DescargarDocumentos"
              label="Descargar Documentos"
              style={CheckboxGrande}
            />
          </Col>
        </Row>

        <Button style={{ marginTop: "20px" }}> Guardar cambios </Button>

        <p style={Tiulos}>Restablecer Permisos</p>
        <Button> Eliminar Permisos Individuales </Button>
      </Container>
      <Footer />
    </div>
  );
}

const Tiulos = {
  fontFamily: "Poppins, sans-serif",
  fontSize: "25px",
  fontWeight: 600,
  marginBottom: "20px",
  color: "#2c3e50",
  marginTop: "40px",
};

const Select = {
  borderRadius: "10px",
  height: "45px",
  fontFamily: "Poppins, sans-serif",
  fontSize: "17px",
};

const Listas = {
  border: "1px solid #ccc",
  height: "50px",
  borderRadius: "5px",
  listStyle: "none",
  fontFamily: "Poppins, sans-serif",
  fontSize: "17px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "15px",
  marginBottom: "1px",
};

const CheckboxGrande = {
  transform: "scale(1.4)",
  marginRight: "10px",
  marginLeft: "75px",
};
