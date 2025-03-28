import React from "react";
import Navbar_Admin from "../../components/Navbar_Admin";
import Footer from "../../components/Footer";
import Table from "react-bootstrap/Table";
import Molda_Admin from "../../components/Molda_Admin";

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

// -------------------------------------------------------------
export default function Usuarios() {
  return (
    <div>
      <Navbar_Admin />

      <h1 className="text-center my-4">USUARIOS</h1>

      {/* Contenedor principal */}
      <div style={containerStyle}>
        {/* Contenedor flex para buscar y botón */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          {/* Buscador */}
          <div style={searchContainerStyle}>
            <i className="bi bi-funnel"></i>
            <input
              style={searchInputStyle}
              type="text"
              placeholder="Escribe aquí..."
            />
          </div>

          {/* Botón agregar */}
          <Molda_Admin NombreBoton="Agregar Usuario" campos={CamposInputs} />
        </div>

        {/* Tabla */}
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
            {UsuariosN.map((Usu, index) => (
              <tr key={index}>
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
                  <Molda_Admin
                    NombreBoton="Eliminar usuario"
                    campos={CamposInputsEliminar}
                  />
                  <br />
                  <br />
                  <Molda_Admin
                    NombreBoton="Editar usuario"
                    campos={CamposInputs}
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

const searchInputStyle = {
  border: "none",
  outline: "none",
  width: "200px",
};

const searchContainerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "5px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  padding: "8px",
};
