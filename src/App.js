import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import  Home from "./pages/Home";
import Index_Admin from "./pages/View_Admin/Index_Admin";
import Usuarios from "./pages/View_Admin/usuarios"
import Pdf from "./pages/View_Admin/Pdf"

//import Header from "./components/Header"; // Inactive para que no mostrara

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route index path="/" element ={<Home />} />
    <Route path="/AdminHome" element={<Index_Admin />}/>
    <Route path="/AdminUsuarios" element = {<Usuarios />}/>
    <Route path="/AdminPdf" element = {<Pdf />}/>
   </Routes>
   </BrowserRouter>
    
    
  );
};

export default App;
