import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Pdf_Admin from '../components/Pdf_Admin';

export default function Molda_Admin({ NombreBoton, Icono, campos = [],pdf }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //   console.log("Campos recibidos en Molda_Admin:", campos);
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ marginLeft: "80     %" }}
      >
        {Icono}
        {NombreBoton}
      </Button>

      <Modal show={show} onHide={handleClose}  size={pdf && "xl"} >
        <Modal.Header closeButton>
          <Modal.Title> {NombreBoton}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {campos.map((campo, index) => (
              <Form.Group key={index} className="mb-3" controlId={index + 1}>
                <Form.Label>{campo.label}</Form.Label>
                <Form.Control
                  type={campo.type}
                  placeholder={campo.placeholder}
                />
              </Form.Group>
            ))}
          </Form>
          

          {pdf && <Pdf_Admin Link=  "/assets/Administración_de_cuentas_de_cobro.pdf" />}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
