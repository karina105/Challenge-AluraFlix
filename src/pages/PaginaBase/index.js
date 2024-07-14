import React from 'react';
import { useLocation } from 'react-router-dom';
import Cabecera from '../../components/Cabecera';
import Banner from '../../components/Banner';
import { VideoProvider } from '../../context/index';
import { Outlet } from 'react-router-dom';
import PieDePagina from 'components/Footer';

function PaginaBase() {
    const location = useLocation();

    return (
        <VideoProvider>
            <main>
                <Cabecera />
                {location.pathname === '/' && <Banner />}
                <Outlet />
                <PieDePagina />
            </main>
        </VideoProvider>
    );
}

export default PaginaBase;
