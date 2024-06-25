import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaBase from './pages/PaginaBase';
import Inicio from './pages/Inicio';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />} />
                <Route path="/inicio" element={<Inicio />} />
                {/* Definir la  ruta de nueva pagina*/}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
