import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Button,
  Offcanvas,
  ListGroup,
  Collapse,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Lateral_Nombres from "./Lateral_Nombres";

export default function MenuHamburguesa() {
  const [show, setShow] = useState(false);
  const [openMenus, setOpenMenus] = useState({}); // Estado para rastrear qué menús están abiertos

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Función para alternar la apertura/cierre de submenús
  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const icon_Lateral = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-chevron-compact-down"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"
      />
    </svg>
  );

  return (
    <>
      <Navbar expand="lg" className="px-3">
        <Button variant="outline-primary" onClick={handleShow} className="me-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-compact-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"
            />
          </svg>
        </Button>

        <Navbar.Brand as={Link} to="/"></Navbar.Brand>
        <Nav className="ms-auto"></Nav>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        backdrop={false}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>ADCU</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* ----------------------------------------------------------------- */}
          {/* USUARIOS  */}
          <ListGroup.Item action onClick={() => toggleMenu("usuarios")}>
            Usuarios {icon_Lateral}
          </ListGroup.Item>
          <Collapse in={openMenus["usuarios"]}>
            <div className="ms-3">
              <ListGroup>
                <Lateral_Nombres
                  Nombre="Crear usuarios"
                  Link="/AdminUsuarios"
                />
              </ListGroup>

              <ListGroup>
                <Lateral_Nombres
                  Nombre="Usuarios detalles"
                  Link="/AdminUsuarioDeTalles"
                />
              </ListGroup>
            </div>
          </Collapse>
          <hr />

          {/* ----------------------------------------------------------------- */}
          {/* Gestion documental  */}

          <ListGroup.Item
            action
            onClick={() => toggleMenu("GestionDocumental")}
          >
            Gestion documental {icon_Lateral}
          </ListGroup.Item>
          <Collapse in={openMenus["GestionDocumental"]}>
            <div className="ms-3">
              <ListGroup>
                <Lateral_Nombres
                  Nombre="Gestor de documentos"
                  Link="/GestorDeDocumentos"
                />
                <Lateral_Nombres
                  Nombre="Recuperacion de archivos"
                  Link="/RecuperacionDeArchivos"
                />
                <Lateral_Nombres
                  Nombre="Intercambio de documentos"
                  Link="/IntercambioDeDocumentos"
                />
              </ListGroup>
            </div>
          </Collapse>
          <hr />
          {/* ----------------------------------------------------------------- */}
          {/* Control de Accesos y Seguridad  */}

          <ListGroup.Item
            action
            onClick={() => toggleMenu("ControldeAccesosySeguridad")}
          >
            Control de Accesos y Seguridad {icon_Lateral}
          </ListGroup.Item>
          <Collapse in={openMenus["ControldeAccesosySeguridad"]}>
            <div className="ms-3">
              <ListGroup>
                <Lateral_Nombres
                  Nombre="Gestion de grupos"
                  Link="/GestionDeGrupos"
                />
              </ListGroup>

              <ListGroup>
                <Lateral_Nombres
                  Nombre="Gestion de permisos individual"
                  Link="/GestionIndividual"
                />
              </ListGroup>

              <ListGroup>
                <Lateral_Nombres
                  Nombre="Registro de actividades"
                  Link="/RegistroDeActivdades"
                />
              </ListGroup>

              <ListGroup>
                <Lateral_Nombres
                  Nombre="Consultas y reportes"
                  Link="/Consultas"
                />
              </ListGroup>

              <ListGroup>
                <Lateral_Nombres
                  Nombre="Monitoreo y Alertas"
                  Link="/Monitereo"
                />
              </ListGroup>

              <ListGroup>
                <Lateral_Nombres
                  Nombre="Encriptamiento de documentos"
                  Link="/Encritamiento"
                />
              </ListGroup>
            </div>
          </Collapse>
          <hr />

          {/* ----------------------------------------------------------------- */}
          {/* Colaboracion */}

          <ListGroup.Item action onClick={() => toggleMenu("Colaboracion")}>
            Colaboracion {icon_Lateral}
          </ListGroup.Item>

          <Collapse in={openMenus["Colaboracion"]}>
            <div className="ms-3">
              <ListGroup>
                <Lateral_Nombres
                  Nombre="Control de Acceso"
                  Link="/ControlDeAceso"
                />
              </ListGroup>

              <ListGroup>
                <Lateral_Nombres
                  Nombre="Gestion de permisos individual"
                  Link="/GestionDePermisosIn"
                />
              </ListGroup>

              <ListGroup>
                <Lateral_Nombres
                  Nombre="Gestión de Versiones y Comentarios"
                  Link="/GestionDeVersiones"
                />
              </ListGroup>
            </div>
          </Collapse>
          {/* ----------------------------------------------------------------- */}
          <Lateral_Nombres
            Nombre="Flujo de trabajo"
            Link="/Flujosdedocumentos"
          />

          <Lateral_Nombres Nombre="Firma Electrónica" />
          <Lateral_Nombres Nombre="Búsqueda y Recuperación" />
          <Lateral_Nombres Nombre="Integración con Otras Herramientas" />
          <Lateral_Nombres Nombre="Almacenamiento en la Nube" />
          <Lateral_Nombres Nombre="Archivado y Retención" />
          <Lateral_Nombres Nombre="Reportes" />
          <Lateral_Nombres Nombre="Pdf" Link="/AdminPdf" />
        </Offcanvas.Body>
      </Offcanvas>

      {/* <DropdownButton
        as={ButtonGroup}
        id="dropdown-button-drop-end"
        drop="end" // Se abre a la derecha
        variant="secondary"
        title="USUARIOS"
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton> */}
    </>
  );
}
