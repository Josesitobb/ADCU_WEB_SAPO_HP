import React from 'react';
import {  Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Lateral_Nombres(props) {
  return (
    <div>
      <hr />
        <Nav.Link as={Link} to={props.Link} >{props.Nombre}</Nav.Link>
        <hr />
    </div>
  )
}
