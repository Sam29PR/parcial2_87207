import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cabecera from './app/componets/conetenedor/Cabecera';

import { Acerca } from './app/componets/otros/Quienes';
import { AdminRevistas } from './app/componets/revistas/AdminRevistas';
import { ListarRevistas } from './app/componets/revistas/ListarRevistas';

import Inicio from './app/componets/conetenedor/Inicio';
import { RegistarRevistas } from './app/componets/revistas/RegistrarRevistas';


const App: React.FC = () => {
  return (
    <Router>
      <Cabecera />
      <Routes>
        <Route path="/" element={<Inicio/>} />
        
        <Route path="/pricing/register" element={<RegistarRevistas/>} />
        
        <Route path="/pricing/list" element={<ListarRevistas/>} />
        <Route path="/pricing/admin" element={<AdminRevistas/>} />
        <Route path="/about" element={<Acerca />} />
      </Routes>
    </Router>
  );
};


export default App;
