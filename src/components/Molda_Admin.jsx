import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


export default function Molda_Admin(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Button variant="primary" onClick={handleShow} style={{ marginLeft: '80     %' }}>
               {props.Icono}
                {props.NombreBoton}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> {props.NombreBoton}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">


                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese un nombre"
                                autoFocus
                            />
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese un apellido"
                                autoFocus
                            />
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="name@example.com"
                                autoFocus
                            />
                            <Form.Label>Numero de cedula</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="name@example.com"
                                autoFocus
                            />
                            <Form.Label>Estado</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="ACTIVO"
                                autoFocus
                                disabled
                            />
                            <Form.Label>Numero de contrato</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Ejemplo:789852"
                                autoFocus
                            />
                            <Form.Label>Correo</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="ejemplo@example.com"
                                autoFocus
                            />
                            <Form.Label>Rol</Form.Label>
                            <Form.Select aria-label="Seleccionar Rol">
                                <option value="admin">Administrador</option>
                                <option value="user">Usuario</option>
                            </Form.Select>

                        </Form.Group>





                    </Form>
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
