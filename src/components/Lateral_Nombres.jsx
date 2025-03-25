import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Lateral_Nombres(props) {
  const [hover, setHover] = useState(false);

  return (
    <div>
      <hr />
      <Nav.Link
        as={Link}
        to={props.Link}
        style={{
          textDecoration: "none",
          color: hover ? "gray" : "black",
          transition: "color 0.3s ease-in-out",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {props.Nombre}
      </Nav.Link>
    </div>
  );
}
