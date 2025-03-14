import React, { useState } from "react";
import { Navbar, Nav, Button, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import Lateral_Nombres  from "./Lateral_Nombres";

export default function MenuHamburguesa() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" className="px-3">
        <Button variant="outline-primary" onClick={handleShow} className="me-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </Button>


      
        <Navbar.Brand as={Link} to="/"></Navbar.Brand>
        <Nav className="ms-auto">
          {/* Otros elementos del Nav si los necesitas */}
        
        </Nav>
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
        <Lateral_Nombres Nombre = "Usuario" Link="/AdminUsuarios" />
        <Lateral_Nombres Nombre = "Gestion documental" />
        <Lateral_Nombres Nombre = "Control de Accesos y Seguridad" />
        <Lateral_Nombres Nombre = "Colaboración" />
        <Lateral_Nombres Nombre = "Flujos de Trabajo" />
        <Lateral_Nombres Nombre = "Firma Electrónica" />
        <Lateral_Nombres Nombre = "Búsqueda y Recuperación" />
        <Lateral_Nombres Nombre = "Integración con Otras Herramientas" />
        <Lateral_Nombres Nombre = "Almacenamiento en la Nube" />
        <Lateral_Nombres Nombre = "Archivado y Retención" />
        <Lateral_Nombres Nombre = "Reportes" />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
