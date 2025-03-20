import React from 'react';
import Navbar_Admin from '../../components/Navbar_Admin'; 
import Footer from '../../components/Footer';
import Pdf_Admin from '../../components/Pdf_Admin'


export default function Pdf() {
  return (
    <div>
        <Navbar_Admin />
      <h1>Soy el Pdf</h1>
      <Pdf_Admin Link=  "/assets/Administración_de_cuentas_de_cobro.pdf" />
      <Footer />
    </div>
  )
}
