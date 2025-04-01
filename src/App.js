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
import GestionDeGrupos from "./pages/View_Admin/GestionDeGrupos";
import GestionDePermisosIndividual from "./pages/View_Admin/GestionDePermisosIndividual";
import RegistroDeActividades from "./pages/View_Admin/RegistroDeActividades";
import ConsultasyReportes from "./pages/View_Admin/ConsultasyReportes";
import MonitoreoyAlertas from "./pages/View_Admin/MonitoreoyAlertas";
import EncritamientoDeDocumentos from "./pages/View_Admin/EncritamientoDeDocumentos";
import ControlDeAceso from "./pages/View_Admin/ControlDeAceso";
import GestorDePermisosIndividuales from "./pages/View_Admin/GestionDePermisosIndividual";
import GestionDeVersionyComentarios from "./pages/View_Admin/GestionDeVersionyComentarios";


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
        <Route path="/IntercambiodeDocumentos" element={<IntercambiodeDocumentos />} />
        {/* Control y acceso  y seguridad */}
        <Route path="/GestionDeGrupos" element={<GestionDeGrupos />} />
        <Route path="/GestionIndividual" element={<GestionDePermisosIndividual />} />
        <Route path="/RegistroDeActivdades" element={<RegistroDeActividades />} />
        <Route path="/Consultas" element={<ConsultasyReportes />} />
        <Route path="/Monitereo" element={<MonitoreoyAlertas />} />
        <Route path="/Encritamiento" element={<EncritamientoDeDocumentos />} />
        {/* Colaboracion */}
        <Route path="/ControlDeAceso" element={<ControlDeAceso />} />
        <Route path="/GestionDePermisosIn" element={<GestorDePermisosIndividuales />} />
        <Route path="/GestionDeVersiones" element={<GestionDeVersionyComentarios />} />
      </Routes>
    </BrowserRouter>


  );
};

export default App;