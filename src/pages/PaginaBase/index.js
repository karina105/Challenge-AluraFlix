import React from 'react';
import Cabecera from '../../components/Cabecera';
import Banner from '../../components/Banner';
import AppRoutes from '../../routes';
import { VideoProvider } from '../../context/index';

function PaginaBase() {
    return (
        <VideoProvider>
            <main>
                <Cabecera />
                <Banner />
                <AppRoutes />

            </main>
        </VideoProvider>
    );
}

export default PaginaBase;
