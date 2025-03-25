import React from "react";
import Navbar_Admin from "../../components/Navbar_Admin";
import Footer from "../../components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
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
import { Line, Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

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

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Ingreo de usuarios al sistema",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  labels,
  datasets: [
    {
      label: "Rol 1 Admin",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })), // Corrección aquí
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Rol 2 admin",
      data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })), // Corrección aquí
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const style = {
  width: "500px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
};

export default function UsuariosDetalles() {
  return (
    <div>
      <Navbar_Admin />
      <h1 style={style}>Usuario detalles </h1>
      <div style={style}>
        <Line options={options} data={data} />
        <Bar options={options} data={data} />
      </div>

      <Row className="mb-4" style={{ marginTop: "80px" }}>
        <Col md={4}>
          <Card className="p-3 text-center shadow">
            <Card.Body>
              <h3 className="text-primary">
                <i className="bi bi-people">15.000 </i>
              </h3>
              <Card.Text>Usuarios registrados en el sistema</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-3 text-center shadow">
            <Card.Body>
              <h2 className="text-danger">
                {" "}
                <i class="bi bi-person-dash">1.200</i>
              </h2>
              <Card.Text>Usuarios Inactivados</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="p-3 text-center shadow">
            <Card.Body>
              <h2 className="text-success">
                {" "}
                <i class="bi bi-person-check">13.800 </i>
              </h2>
              <Card.Text>Usuarios Activos</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Footer />
    </div>
  );
}
