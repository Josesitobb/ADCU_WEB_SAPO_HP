import React from "react";
import Navbar_Admin from "../../components/Navbar_Admin";
import Footer from "../../components/Footer";
import Table from "react-bootstrap/Table";
import Molda_Admin from "../../components/Molda_Admin";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/styles.css";
export default function Usuarios() {
  return (
    <div>
      <Navbar_Admin />
      <h1 className="tituloPrincipal">USUARIOS</h1>
      <Row>
        <Col>
          <div style={{ marginLeft: "82%", marginBottom: "7px" }}>
            <Molda_Admin
              NombreBoton="Agregar Usuario"
              campos={CamposInputs}
              EstilosBoton={"botonVerde"}
            />
          </div>
        </Col>
      </Row>

      <table className="tablaTodos">
        <thead className="encabezadoTabla">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Contraseña</th>
            <th>Numero de cedula</th>
            <th>Estado</th>
            <th>Numero de contrato</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
          
        </thead>
        <tbody >
          {UsuariosN.map((Usu, index) => (
            <tr key={index} style={{borderBottom:"1px solid #ccc"}}>
        
              <td>{index + 1}</td>
              <td>{Usu.Nombre}</td>
              <td>{Usu.Apellido}</td>
              <td>{Usu.Contraseña}</td>
              <td>{Usu.NumeroDeCedula}</td>
              <td>{Usu.Estado}</td>
              <td>{Usu.NumeroDeContrato}</td>
              <td>{Usu.Correo}</td>
              <td>{Usu.Rol}</td>
              <td>
                <div style={{ margin: "2px" }}></div>
                <Molda_Admin
                  NombreBoton="Eliminar usuario"
                  campos={CamposInputsEliminar}
                  EstilosBoton={"botonAzul"}
                />
                <div style={{ margin: "2px" }}></div>
                <Molda_Admin
                  NombreBoton="Editar usuario"
                  campos={CamposInputs}
                  EstilosBoton={"botonAzul"}
                />
                
              </td>
            </tr>

            
          ))}
        </tbody>
      </table>

      <Footer />
    </div>
  );
}

// Campos de la tabla
const UsuariosN = [
  {
    id: 1,
    Nombre: "Pedro ",
    Apellido: "sanchez",
    Contraseña: "Contraseña",
    NumeroDeCedula: 1908384,
    Estado: "Activo",
    NumeroDeContrato: 2024_56,
    Correo: "PedroSanchez@gmail.com",
    Rol: "Administrador",
  },
];
// ESTILOS AUXILIARES

// Campos del modal

// Modal de agregar usuario
const CamposInputs = [
  {
    label: "Nombre",
    name: "nombre",
    type: "text",
    placeholder: "Ingrese su nombre",
  },
  {
    label: "Apellido",
    name: "apellido",
    type: "text",
    placeholder: "Ingrese su apellido",
  },
  {
    label: "Contraseña",
    name: "contraseña",
    type: "password",
    placeholder: "Ingrese su contraseña",
  },
  {
    label: "Número de Cédula",
    name: "numeroDeCedula",
    type: "number",
    placeholder: "Ingrese su número de cédula",
  },
  {
    label: "Estado",
    name: "estado",
    type: "text",
    placeholder: "Ingrese el estado (Activo/Inactivo)",
  },
  {
    label: "Número de Contrato",
    name: "numeroDeContrato",
    type: "number",
    placeholder: "Ingrese el número de contrato",
  },
  {
    label: "Correo",
    name: "correo",
    type: "email",
    placeholder: "Ingrese su correo",
  },
  {
    label: "Rol",
    name: "rol",
    type: "text",
    placeholder: "Ingrese el rol (Administrador, Usuario, etc.)",
  },
];

// Modal para eliminar usuario

const CamposInputsEliminar = [
  {
    label: "Nombre",
    name: "nombre",
    type: "text",
    placeholder: "Nombre del usuario",
    disabled: true, // Normalmente solo se muestra, no se edita
  },
  {
    label: "Apellido",
    name: "apellido",
    type: "text",
    placeholder: "Apellido del usuario",
    disabled: true,
  },
  {
    label: "Número de Cédula",
    name: "numeroDeCedula",
    type: "number",
    placeholder: "Número de cédula",
    disabled: true,
  },
];
