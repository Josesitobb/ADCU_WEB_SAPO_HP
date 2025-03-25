import React from "react";
import Navbar_Admin from "../../components/Navbar_Admin";
import Footer from "../../components/Footer";
import Table from "react-bootstrap/Table";
import Molda_Admin from "../../components/Molda_Admin";

export default function Usuarios() {
  return (
    <div>
      <Navbar_Admin />
      <h1 className="text-center my-4">USUARIOS</h1>

      {/* Contenedor para mantener Molda_Admin encima de la tabla */}
      <div style={containerStyle}>
        <Molda_Admin
          NombreBoton="Agregar Usuario"
          Icono={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="20"
              fill="currentColor"
              className="bi bi-person-fill-add"
              viewBox="0 0 16 16"
            >
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
            </svg>
          }
        />
        <Table striped="columns" style={tableStyle}>
          <thead>
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
          <tbody>
            <tr>
              <td>1</td>
              <td>Maria</td>
              <td>Gonzales</td>
              <td>123456789</td>
              <td>123456789</td>
              <td>Activa</td>
              <td>859788789</td>
              <td>Maria@gmail.com</td>
              <td>Administrador</td>
              <td>
                <a href="">Eliminar</a>
                <br />
                <a href="">Editar</a>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <Footer />
    </div>
  );
}

// Estilos
const containerStyle = {
  display: "flex",
  flexDirection: "column", // Asegura que Molda_Admin esté encima de la tabla
  alignItems: "center", // Centra el contenido
  width: "80%",
  margin: "auto",
  marginTop: "10%",
};

const tableStyle = {
  width: "100%", // La tabla ocupa todo el ancho del contenedor
  marginTop: "20px", // Espacio entre Molda_Admin y la tabla
};
