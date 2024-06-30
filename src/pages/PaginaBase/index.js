import React from 'react';
import Cabecera from '../../components/Cabecera';
import Banner from '../../components/Banner';
import { VideoProvider } from '../../context/index';
import { Outlet } from 'react-router-dom';
import PieDePagina from 'components/Footer';

function PaginaBase() {
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
