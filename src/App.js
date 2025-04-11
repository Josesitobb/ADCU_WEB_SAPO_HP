import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Index_Admin from "./pages/View_Admin/Index_Admin";
import Usuarios from "./pages/View_Admin/Usuarios";
import Pdf from "./pages/View_Admin/Pdf";

// JOSE
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
import Documentos from "./pages/View_Admin/Documentos";

//    DAYANA


import Aprobacion from "./pages/View_Admin/Aprobacion";
import Seguimiento from "./pages/View_Admin/Seguimiento";
import Notificaciones from "./pages/View_Admin/Notificaciones";
import FirmadeDocumento from "./pages/View_Admin/FirmadeDocumentos";
import EnviodeDocumentos from "./pages/View_Admin/EnviodeDocuemntos";
import ValidaciondelaFirmas from "./pages/View_Admin/ValidaciondelaFirma";
import AccesodeDocmentos from "./pages/View_Admin/AccesodeDocuemntos";
import ConsultadeDocumentos from "./pages/View_Admin/ConsultadeDocuementos";
import RechazodeDocumentos from "./pages/View_Admin/RechazodeDocuemntos";
import BusquedadeDocumentos from "./pages/View_Admin/BusquedadeDocumento";
import FiltrosdeBusqueda from "./pages/View_Admin/FiltrosdeBusqueda";
import RecuperaciondeDocuemntos from "./pages/View_Admin/RecuperaciondeDocuemntos";
import SincronizaciondeDocumentos from "./pages/View_Admin/SincronizaciondeDocumentos";
import ServiciosenlaNube from "./pages/View_Admin/ServiciosenlaNube";
import InteraccionconBasedeDatos from "./pages/View_Admin/InteraccionconBasedeDatos";

// DIEGO

import Copiasdeseguridadautomaticas from "./pages/View_Admin/Copiasdeseguridadautomaticas";
import Accesoremotoadocumentos from "./pages/View_Admin/Accesoremotoadocumentos";
import Sicronizacionentiemporeal from "./pages/View_Admin/Sinronizacionentiemporeal";
import PoliticasretenciondeDocumentos from "./pages/View_Admin/PoliticasretenciondeDocumentos";
import ArchivoAutomaticoseguncriterio from "./pages/View_Admin/ArchivoAutomaticoseguncriterio";
import Eliminacionseguradedocumentosobsoletos from "./pages/View_Admin/Eliminacionseguradedocumentosobsoletos";
import Generaciondereportesdeactividaddedocumentos from "./pages/View_Admin/Generaciondereportesdeactividaddedocumentos";
import Reportedeflujosdetrabajo from "./pages/View_Admin/Reportedeflujosdetrabajo";
import Reportedefirmaelectronica from "./pages/View_Admin/Reportedefirmaelectronica";
import Reportedearchivoyretenciondedocumentos from "./pages/View_Admin/Reportedearchivoyretenciondedocumentos";
import Creacionreportespersonalizados from "./pages/View_Admin/Creacionreportespersonalizados";
import Reportedeseguridaddecontroldeacccesos from "./pages/View_Admin/Reportedeseguridaddecontroldeacccesos";


const App = () => {
  return (
    <BrowserRouter>
    {/* JOSE */}
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
        <Route path="/DocumentosProyectos" element={<Documentos/>} />
     
      {/* ----------------------------------------------------------------------------- */}

      {/*DAYANA  */}
      {/* Flujo se trabajo */}
      <Route path="/Aprobacion" element={<Aprobacion/>} />
        <Route path="/Seguimiento" element={<Seguimiento/>} />
        <Route path="/Notificaciones" element={<Notificaciones/>} />
        {/* Firma Electronica */}
        <Route path="/FirmadedeDocumento" element={<FirmadeDocumento/>} />
        <Route path="/EnviodeDocumento" element={<EnviodeDocumentos/>} />
        <Route path="/ValidaciondelaFirma" element={<ValidaciondelaFirmas/>} />
        <Route path="/AccesodeDocmentos" element={<AccesodeDocmentos/>} />
        <Route panth="/ConsultadeDocuemnto" element={<ConsultadeDocumentos/>} />
        <Route path="/RechazooModificacion" element={<RechazodeDocumentos/>} />
      {/* Busqueda y colaboracion */}
        <Route path="/BusquedadeDocumentos" element={<BusquedadeDocumentos/>} />
        <Route path="/FiltrosdeBusqueda" element={<FiltrosdeBusqueda/>} /> 
        <Route path="/RecuperaciondeDocuemntos" element={<RecuperaciondeDocuemntos/>} />
         {/* Integracion con otras Herramientas */}
        <Route path="/SincronizaciondeDocumentos" element={<SincronizaciondeDocumentos/>} /> 
        <Route path="/ServiciosenlaNube" element={<ServiciosenlaNube/>} /> 
        <Route path="/InteraccionconBasedeDatos" element={<InteraccionconBasedeDatos/>} /> 
  {/* ----------------------------------------------------------------------------- */}
  {/* DIEGO */}
  {/* Almacenamiento en la nube */}

  <Route path="/Copiasdeseguridadautomaticas" element={<Copiasdeseguridadautomaticas/>} />
        <Route path="/Accesoremotoadocumentos" element={<Accesoremotoadocumentos/>} />
        <Route path="/Sicronizacionentiemporeal" element={<Sicronizacionentiemporeal/>} />
        {/* Archivo y Retencion */}
        <Route path="/PoliticasretenciondeDocumentos" element={<PoliticasretenciondeDocumentos/>} />
        <Route path="/ArchivoAutomaticoseguncriterio" element={<ArchivoAutomaticoseguncriterio/>} />
        <Route path="/Eliminacionseguradedocumentosobsoletos" element={<Eliminacionseguradedocumentosobsoletos/>} />
        {/* Reportes */}
        <Route path="/Generaciondereportesdeactividaddedocumentos" element={<Generaciondereportesdeactividaddedocumentos/>} />
        <Route path="/Reportedeflujosdetrabajo" element={<Reportedeflujosdetrabajo/>} />
        <Route path="/Reportedefirmaelectronica" element={<Reportedefirmaelectronica/>} />
        <Route path="/Reportedeseguridaddecontroldeacccesos" element={<Reportedeseguridaddecontroldeacccesos/>} />
        <Route path="/Reportedearchivoyretenciondedocumentos" element={<Reportedearchivoyretenciondedocumentos/>} />
        <Route path="/Creacionreportespersonalizados" element={<Creacionreportespersonalizados/>} />
        </Routes>
    </BrowserRouter>


  );
};

export default App;