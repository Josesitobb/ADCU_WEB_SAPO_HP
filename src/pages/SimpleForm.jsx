// src/pages/SimpleForm.jsx
import React from "react";
import logo from "../images/Captura de pantalla 2025-03-11 145839.png";

export default function SimpleForm(props) {
  return (
    <section style={styles.container}>
      <img
        src={logo}
        width="150"
        alt="Logo"
        style={{ display: "block", margin: "0 auto", borderRadius: "360px" }}
      />

      <hr />
      <h1 style={styles.title}>{props.NombreFrom}</h1>
      <hr />
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>
            {props.PrimerCampo}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ingresa tu nombre"
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            {props.SegundoCampo}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu correo"
            style={styles.input}
          />
        </div>

        {props.isVisible && (
        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Ingresa tu contraseña"
            rows="4"
            style={styles.textarea}
          />
        </div>
)}
        <button type="submit" style={styles.button}>
          Enviar
        </button>

      </form>
    </section>
  );
}

// Estilos en línea (puedes moverlos a un archivo CSS si prefieres)
const styles = {
  container: {
    padding: "20px",
    maxWidth: "400px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5dfd4",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    color: "#ee5a10",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "#ee5a10",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
