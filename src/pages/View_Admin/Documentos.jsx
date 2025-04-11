import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar_Admin from '../../components/Navbar_Admin'; 
import Footer from '../../components/Footer';
import Pdf from '../View_Admin/Pdf';
import Molda_Admin from "../../components/Molda_Admin";


export default function Documentos () {
  return (
    <div>
                <Navbar_Admin />

<div style={{marginRight:"10%",marginTop:"10%"}} >

    <div style={{display:"flex", justifyContent:"space-evenly"}}>
<Pdf
imagen={"https://juanjobote.com/wp-content/uploads/2016/01/documentos-en-word-juanjobote.jpg"}

titulo={"Propuesta tecnica"}

componentes ={<Molda_Admin

    NombreBoton={"Click para ver"}
    pdf
    Links={"/assets/Administración_de_cuentas_de_cobro.pdf"}

/>}
/>


<Pdf
imagen={"https://juanjobote.com/wp-content/uploads/2016/01/documentos-en-word-juanjobote.jpg"}

titulo={"Diagrama de clases"}

componentes ={<Molda_Admin

    NombreBoton={"Click para ver"}
    pdf
    Links={"/assets/Diagrama_de_clases.pdf"}

/>}
/>





<Pdf
imagen={"https://juanjobote.com/wp-content/uploads/2016/01/documentos-en-word-juanjobote.jpg"}

titulo={"Diagrama de despliegue"}

componentes ={<Molda_Admin

    NombreBoton={"Click para ver"}
    pdf
    Links={"/assets/Diagrama_de_despliegue.pdf"}

/>}
/>




</div>
                    <Footer />
    </div>
    </div>
  )
}

