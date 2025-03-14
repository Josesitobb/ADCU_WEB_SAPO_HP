import React from "react";
import { Form, Button } from "react-bootstrap";

export default function ContactForm({NombreForm,Nombre,Correo,Contraseña}) {
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>{NombreForm}Iniciar Sesion</h1>
      <Form>
       
        <Form.Group controlId="formEmail">
          <Form.Label>{Correo}</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu correo" />
        </Form.Group>

        <Form.Group controlId="formName">
          <Form.Label>{Nombre}</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" />
        </Form.Group>

        <Button variant="primary" type="submit">
          
          Enviar
        </Button>
      </Form>
    </div>
  )
}

