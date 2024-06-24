import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaBase from 'pages/PaginaBase';
import Inicio from 'pages/Inicio';
// Importa otras páginas según sea necesario

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />} />
                <Route path="/inicio" element={<Inicio />} />
                {/* Define otras rutas aquí */}
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
