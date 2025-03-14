import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/Logo_Empresa.png';

export default function Navbar_Home() {

  return (
    <>
      <Navbar className="bg-dark" >
        <Container>
          {/* Aseguramos que el contenido del Navbar esté alineado a la izquierda */}
          <Navbar.Brand href="#home" className="d-flex align-items-center" >
            <img
              alt=""
              src={Logo}
              width="60"  
              height=""
              className="d-inline-block align-top"
            />{' '}
            <h1 className="ms-3 mb-0" style={{color:"white"}} >ADCU</h1> {/* Espacio entre logo y texto */}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
