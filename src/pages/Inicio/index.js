import React from 'react';
import CardVideo from '../../components/Cards';
import Modal from '../../components/Modal';
import styles from './index.module.css';
import { useVideoContext } from '../../context';

const colorPorDefecto = '#CCCCCC';

const categoriasColores = {
    'Front End': 'var(--color-frontend)',
    'BackEnd': 'var(--color-backend)',
    'Innovacion y Gestion': 'var(--color-innovacionygestion)',
    // Agregar más categorías y colores según sea necesario
};

const InicioPage = () => {
    const { videos } = useVideoContext();


    return (
        <div className={styles.inicioContainer}>
            {Object.keys(categoriasColores).map(categoriaNombre => (
                <div key={categoriaNombre} className={styles.categoria}>
                    <h2 className={styles.nombre} style={{ backgroundColor: categoriasColores[categoriaNombre] || colorPorDefecto }}>
                        {categoriaNombre}
                    </h2>
                    <div className={styles.video}>
                        {videos.filter(video => video.categoria === categoriaNombre).map(video => (
                            <CardVideo key={video.id} video={video} />
                        ))}
                    </div>
                </div>
            ))}
            <Modal />
        </div>
    );
};

export default InicioPage;
