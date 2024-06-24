import React from 'react';
import Cabecera from 'components/Cabecera'; // Asegúrate de que la importación sea correcta
import Banner from 'components/Banner'; // Asegúrate de que la importación sea correcta
import Categorias from 'components/Categorias'; // Importa el componente Categorias
import CardVideo from 'components/CardVideo'; // Importa el componente CardVideo
import Modal from 'components/Modal'; // Importa el componente Modal

function PaginaBase() {
    return (
        <main>
            <Cabecera />
            <Banner />
            <Categorias />
            <CardVideo />
            <Modal />
        </main>
    );
}

export default PaginaBase;
