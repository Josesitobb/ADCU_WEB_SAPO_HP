import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Index_Admin from "./pages/View_Admin/Index_Admin";
import Usuarios from "./pages/View_Admin/Usuarios";
import Pdf from "./pages/View_Admin/Pdf";
import UsuariosDetalles from "./pages/View_Admin/UsuariosDetalles";




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/AdminHome" element={<Index_Admin />} />
        <Route path="/AdminUsuarios" element={<Usuarios />} />
        <Route path="/AdminPdf" element={<Pdf />} />
        <Route path="/AdminUsuarioDetalles" element={<UsuariosDetalles />} />


      </Routes>
    </BrowserRouter>


  );
};

export default App;
