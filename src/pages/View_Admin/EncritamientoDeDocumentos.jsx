import React from "react";
import Navbar_Admin from "../../components/Navbar_Admin";
import Footer from "../../components/Footer";
import { color } from "chart.js/helpers";
export default function EncritamientoDeDocumentos() {
  return (
    <div>
      <Navbar_Admin />

      <h1 className="text-center my-4"> Encritamiento De Documentos</h1>

      <div>
        <table
          style={{
            width: "70%",
            borderCollapse: "collapse",
            margin: "0 auto",
          }}
        >
          <thead
            style={{
              backgroundColor: "#ecf0f1",
              color: "#2c3e50",
              borderCollapse: "collapse",
              height: "70px",
            }}
          >
            <tr>
              <th style={thTable}>Nombre del Documento </th>
              <th style={thTable}>Estado</th>
              <th style={thTable}>Nivel de Seguridad </th>
              <th style={thTable}>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  padding: "15px",
                  fontSize: "23px",
                  paddingTop: "30px",
                  width: "25%",
                }}
              >
                Informe_Financiero.pdf
              </td>
              <td
                style={{
                  padding: "15px",
                  fontSize: "23px",
                  paddingTop: "30px",
                  color: "#7f8c8d",
                  fontWeight: "bold",
                  fontWeight: 600,
                }}
              >
                Encriptado
              </td>
              <td style={tdTablet}>
                <select name="" id="accion" style={input}>
                  <div style={{ boxShadow: "5px 5px 0" }}>
                    <option value="">Seleccionar </option>
                    <option value="">Crear</option>
                    <option value="">Editar</option>
                    <option value="">Eliminar</option>
                    <option value="">Acceder</option>
                  </div>
                </select>
              </td>
              <td style={tdTablet}>
                <button>Encriptar</button>
              </td>
            </tr>
          </tbody>
        </table>

        <Footer />
      </div>

      <Footer />
    </div>
  );
}

const thTable = {
  padding: "12px",
  textAlign: "left",
  fontWeight: 600,
  height: "20%",
  fontSize: 22,
  color: "#2c3e50",
};

const tdTablet = {
  fontSize: 20,
  marginLeft: "100px",
  paddingLeft: "10px",
  paddingTop: "30px",
};

const input = {
  borderRadius: "5px",
  border: "1px solid #ccc",
  marginTop: "5px",
  width: "auto",
  height: "40px",
};
