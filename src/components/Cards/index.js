// CardVideo.js
import React from 'react';
import { useVideoContext } from '../../context/index';
import styles from './Cards.module.css';
import eliminar from './eliminar.png';
import editar from './editar.png';
import axios from 'axios'; // Importamos axios para realizar la solicitud DELETE

const CardVideo = ({ video }) => {
    const { handleDeleteVideo, openModal } = useVideoContext();

    const handleDelete = async () => {
        try {
            // Aquí hacemos la solicitud DELETE al servidor
            const response = await axios.delete(`https://my-json-server.typicode.com/karina105/AluraFlix-api/videos/${video.id}`);
            // Manejamos la respuesta si es necesario (aunque para este caso específico, no necesitamos hacer nada con la respuesta)
            console.log('Video eliminado correctamente', response.data);
            // Llamamos a la función handleDeleteVideo del contexto si necesitamos hacer más operaciones en el contexto
            handleDeleteVideo(video.id);
        } catch (error) {
            console.error('Error eliminando video:', error);
        }
    };

    const handleEdit = () => {
        openModal(video); // Abrir el modal con los datos del video
    };

    return (
        <div className={styles.cardContainer}>
            <a href={video.video} target="_blank" rel="noopener noreferrer">
                <img className={styles.imgVideo} src={video.imagenVideo} alt={video.titulo} />
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
