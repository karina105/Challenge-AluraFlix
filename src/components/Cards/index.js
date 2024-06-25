import React from 'react';
import { useVideoContext } from '../../context/index';
import axios from 'axios';
import styles from './Cards.module.css';
import eliminar from './eliminar.png';
import editar from './editar.png';

const CardVideo = ({ video }) => {
    const { handleDeleteVideo, openModal } = useVideoContext();

    const handleDelete = async () => {
        try {
            await handleDeleteVideo(video.id);
        } catch (error) {
            console.error('Error deleting video:', error);
        }
    };

    return (
        <div className="card-video">
            <a href={video.video} target="_blank" rel="noopener noreferrer">
                <img src={video.imagenVideo} alt={video.titulo} />
            </a>
            <div className="info">
                <h3>{video.titulo}</h3>
                <p>{video.descripcion}</p>
                <div className="buttons">
                    <button className={styles.buttonCard} onClick={() => handleDelete(video.id)}>
                        <img src={eliminar} alt="Eliminar" />
                        <h3 className={styles.tituloButton}>Eliminar</h3>
                    </button>
                    <button className={styles.buttonCard} onClick={() => openModal(video)}>
                        <img src={editar} alt="Editar" />
                        <h3 className={styles.tituloButton}>Editar</h3>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardVideo;
