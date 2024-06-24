import React, { useState } from 'react';
import axios from 'axios';
import styles from './Cards.module.css';
import eliminar from './eliminar.png';
import editar from './editar.png';

const CardVideo = ({ video, onUpdate }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDelete = async () => {
        try {
            await axios.delete(`https://my-json-server.typicode.com/karina105/AluraFlix-api/videos/${video.id}`);
            onUpdate(); // Actualizar la UI después de eliminar el video
        } catch (error) {
            console.error('Error deleting video:', error);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="card-video">
            <a href={video.video} target="_blank">
                <img src={video.imagenVideo} alt={video.titulo} />
            </a>
            <div className="info">
                <h3>{video.titulo}</h3>
                <p>{video.descripcion}</p>
                <div className="buttons">
                    <button className={styles.buttonCard} onClick={handleDelete}>
                        <img src={eliminar} alt="Eliminar" />
                        <h3 className={styles.tituloButton}>Eliminar</h3>
                    </button>
                    <button className={styles.buttonCard} onClick={openModal}>
                        <img src={editar} alt="Editar" />
                        <h3 className={styles.tituloButton}>Editar</h3>
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <Modal
                    video={video}
                    closeModal={closeModal}
                    onUpdate={onUpdate}
                />
            )}
        </div>
    );
};

export default CardVideo;
