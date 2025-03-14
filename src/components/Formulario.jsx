import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

export default function Formulario() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Previene el envío por defecto
    // Lógica de manejo de formulario aquí (validaciones, envío, etc.)

    // Redirigir a la página Index_Admin
    navigate("/AdminHome"); // Cambia esta ruta según tu configuración
  };


  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
     <Form style={styles.form} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={styles.formGroup}>
          <Form.Label style={styles.label}>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" style={styles.input} />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" style={styles.formGroup}>
          <Form.Label style={styles.label}>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese su contraseña" style={styles.input} />
        </Form.Group>

        

        <Button variant="primary" type="submit" style={styles.button}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '400px',
    margin: '10% auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#444444',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px',
    backgroundColor: '#0056b3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
