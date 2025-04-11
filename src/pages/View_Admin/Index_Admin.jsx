import React from "react";
import Navbar_Admin from "../../components/Navbar_Admin";
import Footer from "../../components/Footer";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import "../../styles/styles.css";

export default function Index_Admin() {
  return (
    <div>
      <Navbar_Admin />
      <h1 style={styles.title}>Bienvenido de nuevo ADMIN</h1>

      {/* Barra de accesos rápidos */}
      <h5 style={styles.title}>Acceso rápido</h5>
      <div style={styles.quickAccessBar}>
        <div style={styles.iconContainer}>
          <i className="bi bi-person-circle" style={styles.icon}></i>
          <span>Usuario</span>
        </div>
        <div style={styles.iconContainer}>
          <i className="bi bi-file-earmark" style={styles.icon}></i>
          <span>Documentos</span>
        </div>
        <div style={styles.iconContainer}>
          <i className="bi bi-activity" style={styles.icon}></i>
          <span>Actividad</span>
        </div>
      </div>

      {/* Contenido lado a lado */}
      <div style={styles.content}>
        {/* Gráfica */}
        <div style={styles.chartContainer}>
          <h5 style={{ textAlign: "center", marginBottom: "15px" }}>
            Gráfica de documentos subidos
          </h5>
          <Line options={options} data={data} />
        </div>

        {/* Tabla */}
        <div style={styles.tableContainer}>
          <h5 style={{ textAlign: "center", marginBottom: "15px" }}>
            Documentos recientes
          </h5>
          <table className="tablaTodos">
            <thead className="encabezadoTabla">
              <tr>
                <th>#</th>
                <th>Nombre de quien subió</th>
                <th>Documento</th>
                <th>Fecha y hora</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Pepe</td>
                <td>Papa</td>
                <td>12/01/2026 13:01:22</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Pera</td>
                <td>papaya</td>
                <td>12/01/2026 13:01:22</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Registrar Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// 🎨 ESTILOS
const styles = {
  quickAccessBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
    margin: "20px 0",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
  },
  icon: {
    fontSize: "2rem",
    transition: "all 0.3s ease",
  },
  title: {
    textAlign: "center",
    margin: "20px 0",
    color: "#333",
  },
  content: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    gap: "30px",
    padding: "20px",
  },
  chartContainer: {
    flex: "1",
    maxWidth: "500px",
  },
  tableContainer: {
    // <-- NUEVO
    flex: "1",
  },
  table: {
    width: "100%",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "documentos subidos",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  labels,
  datasets: [
    {
      label: "Rol 1 Admin",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
