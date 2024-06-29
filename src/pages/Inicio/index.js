// InicioPage.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardVideo from '../../components/Cards';
import Modal from '../../components/Modal';
import styles from './index.module.css';

const colorPorDefecto = '#CCCCCC'; // Color por defecto si no se encuentra un color específico para la categoría

// Objeto para mapear categorías a colores de fondo
const categoriasColores = {
    'Front End': '#6BD1FF',
    'BackEnd': '#00C86F',
    'Innovacion y Gestion': '#FFBA05',
    // Agrega más categorías y colores según sea necesario
};

const InicioPage = () => {
    const [categorias, setCategorias] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [videoToEdit, setVideoToEdit] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://my-json-server.typicode.com/karina105/AluraFlix-api/videos');
                if (response.data && Array.isArray(response.data)) {
                    // Agrupar videos por categoría
                    const categoriasAgrupadas = response.data.reduce((acc, video) => {
                        const categoriaExistente = acc.find(cat => cat.categoriaNombre === video.categoria);
                        if (categoriaExistente) {
                            categoriaExistente.videos.push(video);
                        } else {
                            acc.push({
                                categoriaNombre: video.categoria,
                                videos: [video],
                            });
                        }
                        return acc;
                    }, []);

                    setCategorias(categoriasAgrupadas);
                } else {
                    console.error('La estructura de los datos devueltos por la API es incorrecta:', response.data);
                }
            } catch (error) {
                console.error('Error al obtener los videos:', error);
            }
        };

        fetchData();
    }, []);

    const handleEdit = (video) => {
        setVideoToEdit(video);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setVideoToEdit(null);
    };

    return (
        <div className={styles.inicioContainer}>
            {categorias.map(categoria => (
                <div key={categoria.categoriaNombre} className={styles.categoria}>
                    <h2 className={styles.nombre} style={{ backgroundColor: categoriasColores[categoria.categoriaNombre] || colorPorDefecto }}>
                        {categoria.categoriaNombre}
                    </h2>
                    <div className={styles.video}>
                        {categoria.videos.map(video => (
                            <CardVideo key={video.id} video={video} onEdit={handleEdit} />
                        ))}
                    </div>
                </div>
            ))}
            <Modal show={showModal} onClose={handleCloseModal} video={videoToEdit} />
        </div>
    );
};

export default InicioPage;
