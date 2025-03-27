import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Index_Admin from "./pages/View_Admin/Index_Admin";
import Usuarios from "./pages/View_Admin/Usuarios";
import Pdf from "./pages/View_Admin/Pdf";
import UsuariosDetalles from "./pages/View_Admin/UsuariosDetalles";
import GestordeDocumentos from "./pages/View_Admin/GestordeDocumentos";
import IntercambiodeDocumentos from "./pages/View_Admin/IntercambiodeDocumentos";
import RecuperacióndeArchivos from "./pages/View_Admin/RecuperacióndeArchivos";
import Flujosdetrabajo from "./pages/View_Admin/Flujosdetrabajo";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/AdminHome" element={<Index_Admin />} />
        <Route path="/AdminPdf" element={<Pdf />} />
        {/* Usuarios */}
        <Route path="/AdminUsuarios" element={<Usuarios />} />
        <Route path="/AdminUsuarioDetalles" element={<UsuariosDetalles />} />
        {/* Gestion documental */}
        <Route path="/GestorDeDocumentos" element={<GestordeDocumentos />} />
        <Route path="/RecuperacionDeArchivos" element={<RecuperacióndeArchivos />} />
        <Route path="/RecuperacionDeArchivos" element={<RecuperacióndeArchivos />} />
        {/* intercambio de documentos */}
        <Route path="/IntercambiodeDocumentos" element={<IntercambiodeDocumentos />} />


      </Routes>
    </BrowserRouter>


  );
};

export default App;
