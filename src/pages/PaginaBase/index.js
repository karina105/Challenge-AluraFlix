import React from 'react';
import Cabecera from 'components/Cabecera';
import Banner from 'components/Banner';
import CategoriasPage from 'pages/Categorias';
import CardVideo from 'components/Cards';
import Modal from 'components/Modal';

function PaginaBase() {
    return (
        <main>
            <Cabecera />
            <Banner />
            <CategoriasPage />
            <CardVideo />
            <Modal />
        </main>
    );
}

export default PaginaBase;
