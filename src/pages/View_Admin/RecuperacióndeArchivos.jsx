import React from "react";
import Navbar_Admin from "../../components/Navbar_Admin";
import Footer from "../../components/Footer";
import Table from "react-bootstrap/Table";
import Molda_Admin from "../../components/Molda_Admin";
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

const CamposInputsRecuperarArchivo = [
  {
    label: "Nombre del Archivo",
    name: "nombreArchivo",
    type: "text",
    placeholder: "Nombre del archivo",
    disabled: true,
  },
  {
    label: "Categoría",
    name: "categoria",
    type: "text",
    placeholder: "Categoría del archivo",
    disabled: true,
  },
  {
    label: "Propietario",
    name: "propietario",
    type: "text",
    placeholder: "Propietario del archivo",
    disabled: true,
  },
  {
    label: "Fecha de Eliminación",
    name: "fechaEliminacion",
    type: "date",
    placeholder: "Fecha de eliminación",
    disabled: true,
  },
  {
    label: "Eliminado Por",
    name: "eliminadoPor",
    type: "text",
    placeholder: "Usuario que eliminó",
    disabled: true,
  },
  {
    label: "Estado Actual",
    name: "estado",
    type: "text",
    placeholder: "Estado",
    disabled: true,
  },
  {
    label: "Confirmar recuperación",
    name: "confirmarRecuperacion",
    type: "checkbox",
    placeholder: "",
  },
];

const CamposInputsFiltroRecuperarArchivo = [
  {
    label: "Nombre del Archivo",
    name: "nombreArchivo",
    type: "text",
    placeholder: "Ingrese el nombre del archivo",
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
    placeholder: "Ingrese el propietario",
  },
  {
    label: "Desde (Fecha de Eliminación)",
    name: "fechaEliminacionDesde",
    type: "date",
    placeholder: "",
  },
  {
    label: "Hasta (Fecha de Eliminación)",
    name: "fechaEliminacionHasta",
    type: "date",
    placeholder: "",
  },
  {
    label: "Estado",
    name: "estado",
    type: "text",
    placeholder: "Ingrese el estado (Desactivado, Eliminado, etc.)",
  },
];

export default function RecuperacióndeArchivos() {
  return (
    <div>
      <Navbar_Admin />
      <h2 className="text-center my-4">Recuperacion de archivos</h2>

      <div style={containerStyle}>
        <Molda_Admin
          NombreBoton="Filtrar"
          campos={CamposInputsFiltroRecuperarArchivo}
          Icono={<i class="bi bi-nut"></i>}
        />

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
                  <br />
                  <Molda_Admin
                    NombreBoton="Recuperacion de archivo"
                    campos={CamposInputsRecuperarArchivo}
                  />
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
  width: "100%",
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
