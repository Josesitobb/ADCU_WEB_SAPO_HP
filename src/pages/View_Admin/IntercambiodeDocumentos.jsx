import React from "react";
import Navbar_Admin from "../../components/Navbar_Admin";
import Footer from "../../components/Footer";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de importar Bootstrap
import Molda_Admin from "../../components/Molda_Admin";
const UsuariosN = [
  {
    id: 1,
    Nombre: "Impuestos.pdf",
    Apellido: "Activo",
    Contraseña: "Este documento necesitar ser imprimido y confirmado",
    NumeroDeCedula: "Josepoller",
  },
];

const CamposInputsIntercambioDeDocumentos = [
  {
    label: "Documento a Compartir",
    name: "documento",
    type: "text",
    placeholder: "Nombre del documento",
    disabled: true, // no se edita, solo muestra
  },
  {
    label: "Seleccionar Usuario Destino",
    name: "usuarioDestino",
    type: "text",
    placeholder: "Ingrese o seleccione el usuario receptor",
  },
  {
    label: "Mensaje (opcional)",
    name: "mensaje",
    type: "textarea",
    placeholder: "Escribe un mensaje adicional si lo deseas",
  },
  {
    label: "Fecha de Envío",
    name: "fechaEnvio",
    type: "date",
    placeholder: "",
  },
];

export default function IntercambioDeDocumentos() {
  return (
    <div>
      <Navbar_Admin />
      <div className="container-fluid">
        <h2 className="text-center my-4">Intercambio de Documentos</h2>

        {/* Select de documentos */}
        <div className="d-flex flex-column align-items-center gap-2">
          <label htmlFor="documentSelect" className="fw-bold">
            Seleccione un documento
          </label>
          <select id="documentSelect" className="form-select w-50">
            <option value="">-- Seleccionar --</option>
            <option value="documento1.pdf" data-user="Juan Pérez">
              📄 Reporte_2025.pdf
            </option>
            <option value="documento2.docx" data-user="María Gómez">
              📝 Informe_Técnico.docx
            </option>
            <option value="documento3.xlsx" data-user="Carlos López">
              📊 Datos_Financieros.xlsx
            </option>
          </select>
        </div>

        {/* Botones de acción */}
        <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
          <a
            href="/assets/Administración_de_cuentas_de_cobro.pdf"
            download
            className="btn btn-primary"
          >
            Descargar
          </a>
          {/* <button className="btn btn-warning"> */}
          <Molda_Admin
            NombreBoton="Compartir"
            campos={CamposInputsIntercambioDeDocumentos}
          />
          {/* </button> */}
          <button className="btn btn-danger">Eliminar</button>
        </div>

        {/* Tabla de usuarios */}
        <div className="mt-4">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre del Documento</th>
                <th>Estado</th>
                <th>Comentarios</th>
                <th> Compartido por</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {UsuariosN.map((Usu, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{Usu.Nombre}</td>
                  <td>{Usu.Apellido}</td>
                  <td>{Usu.Contraseña}</td>
                  <td>{Usu.NumeroDeCedula}</td>

                  <td>
                    <Molda_Admin NombreBoton="Visualizar" pdf />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <Footer />
      </div>
    </div>
  );
}
