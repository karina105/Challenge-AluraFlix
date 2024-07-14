import React from 'react';
import styles from './Cards.module.css';
import eliminar from './eliminar.png';
import editar from './editar.png';
import { useVideoContext } from '../../context/index'; // Asegúrate de que la importación sea correcta

const CardVideo = ({ video }) => {
    const { handleDeleteVideo, openModal } = useVideoContext(); // Asegúrate de que openModal y handleDeleteVideo estén correctamente obtenidas del contexto

    const handleDelete = async () => {
        try {
            await handleDeleteVideo(video.id);
        } catch (error) {
            console.error('Error eliminando video:', error);
        }
    };

    const handleEdit = () => {
        openModal(video); // Asegúrate de que openModal esté siendo llamada correctamente aquí
    };

    return (
        <div className={styles.cardContainer}>
            <a href={video.video} target="_blank" rel="noopener noreferrer">
                <img className={styles.imgVideo} src={video.imagen} alt={video.titulo} />
            </a>
            <div className={styles.infoContainer}>
                <div className={styles.buttons}>
                    <button className={styles.buttonEliminar} onClick={handleDelete}>
                        <img src={eliminar} alt="Eliminar" />
                        <h3 className={styles.tituloButton}>Eliminar</h3>
                    </button>
                    <button className={styles.buttonEditar} onClick={handleEdit}>
                        <img src={editar} alt="Editar" />
                        <h3 className={styles.tituloButton}>Editar</h3>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardVideo;
