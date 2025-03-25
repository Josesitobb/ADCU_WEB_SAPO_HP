import React from "react";
import Navbar_Admin from "../../components/Navbar_Admin";
import Footer from "../../components/Footer";
import Table from "react-bootstrap/Table";
import Molda_Admin from "../../components/Molda_Admin";

const documentos = [
  {
    id: 1,
    DocumentoNombre: "Contrato_123.pdf",
    DocumentoDescripcion: "Contrato de servicio 2024",
    DocumentoCategoria: "Contratos",
    DocumentoPropietario: "JosePoller",
    DocumentoFecha: "12/02/2024",
    DocumentoEstado: "Activo",
  },
  {
    id: 2,
    DocumentoNombre: "Contrato_123.pdf",
    DocumentoDescripcion: "Contrato de servicio 2024",
    DocumentoCategoria: "Contratos",
    DocumentoPropietario: "JosePoller",
    DocumentoFecha: "12/02/2024",
    DocumentoEstado: "Activo",
  },
];

const CamposInputsDocumentos = [
  {
    label: "Nombre del Documento",
    name: "nombreDocumento",
    type: "text",
    placeholder: "Ingrese el nombre del documento",
  },
  {
    label: "Descripción",
    name: "descripcion",
    type: "text",
    placeholder: "Ingrese una descripción",
  },
  {
    label: "Categoría",
    name: "categoria",
    type: "text",
    placeholder: "Ingrese la categoría",
  },
  {
    label: "Propietario",
    name: "propietario",
    type: "text",
    placeholder: "Ingrese el nombre del propietario",
  },
  {
    label: "Fecha de Creación",
    name: "fechaCreacion",
    type: "date",
    placeholder: "Seleccione la fecha de creación",
  },
  {
    label: "Estado",
    name: "estado",
    type: "text",
    placeholder: "Ingrese el estado (Activo/Inactivo)",
  },
];

export default function GestordeDocumentos() {
  return (
    <div>
      <Navbar_Admin />
      <h2 className="text-center my-4">Gestor de documentos</h2>

      <div style={containerStyle}>
        <Molda_Admin
          NombreBoton="Agregar Documento"
          campos={CamposInputsDocumentos}
        />
        <Table striped="columns" style={tableStyle}>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre del Documento</th>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Propietario</th>
              <th>Fecha de Creación</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {documentos.map((doc, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{doc.DocumentoNombre}</td>
                <td>{doc.DocumentoDescripcion}</td>
                <td>{doc.DocumentoCategoria}</td>
                <td>{doc.DocumentoPropietario}</td>
                <td>{doc.DocumentoFecha}</td>
                <td>{doc.DocumentoEstado}</td>
                <td>
                  <a href="">Eliminar</a>
                  <br />
                  <a href="">Editar</a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Footer />
    </div>
  );
}

const tableStyle = {
  width: "100%", // La tabla ocupa todo el ancho del contenedor
  marginTop: "20px",
};

// Estilos
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "80%",
  margin: "auto",
  marginTop: "10%",
};
