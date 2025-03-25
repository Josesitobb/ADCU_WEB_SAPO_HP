import React from "react";
import Navbar_Admin from "../../components/Navbar_Admin";
import Footer from "../../components/Footer";
import Table from "react-bootstrap/Table";
const archivosRecuperacion = [
  {
    id: 1,
    nombreArchivo: "Contrato_123.pdf",
    categoria: "Contrato de servicio 2024",
    propietario: "JosePoller",
    fechaEliminacion: "12/02/2024",
    eliminadoPor: "Admin",
    estado: "Desactivado",
  },
  {
    id: 2,
    nombreArchivo: "Contrato_123.pdf",
    categoria: "Contrato de servicio 2024",
    propietario: "JosePoller",
    fechaEliminacion: "12/02/2024",
    eliminadoPor: "Admin",
    estado: "Desactivado",
  },
];

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

export default function RecuperacióndeArchivos() {
  return (
    <div>
      <Navbar_Admin />
      <h2 className="text-center my-4">Recuperacion de archivos</h2>

      <div style={containerStyle}>
        {/* <Molda_Admin
          NombreBoton="Agregar Documento"
          campos={CamposInputsDocumentos}
        /> */}
        <Table striped="columns" style={tableStyle}>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre del Archivo</th>
              <th>Categoría</th>
              <th>Propietario</th>
              <th>Fecha de Eliminación</th>
              <th>Eliminado Por</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {archivosRecuperacion.map((doc, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{doc.nombreArchivo}</td>
                <td>{doc.categoria}</td>
                <td>{doc.propietario}</td>
                <td>{doc.fechaEliminacion}</td>
                <td>{doc.eliminadoPor}</td>
                <td>{doc.estado}</td>
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
