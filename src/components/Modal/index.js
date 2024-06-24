import React, { useState } from 'react';
import axios from 'axios';
import styles from './Modal.module.css'; // Ajusta el nombre del archivo de estilos según corresponda

const Modal = ({ video, closeModal, onUpdate }) => {
    const [editedVideo, setEditedVideo] = useState({
        titulo: video.titulo,
        categoria: video.categoria,
        imagenVideo: video.imagenVideo,
        video: video.video,
        descripcion: video.descripcion,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedVideo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        try {
            await axios.put(`http://localhost:3001/videos/${video.id}`, editedVideo);
            onUpdate(); // Actualizar la UI después de editar el video
            closeModal();
        } catch (error) {
            console.error('Error updating video:', error);
        }
    };

    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modal}>
                <h2>Editar Video</h2>
                <label>
                    Título:
                    <input
                        type="text"
                        name="titulo"
                        value={editedVideo.titulo}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Categoría:
                    <input
                        type="text"
                        name="categoria"
                        value={editedVideo.categoria}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Imagen del Video:
                    <input
                        type="text"
                        name="imagenVideo"
                        value={editedVideo.imagenVideo}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Video:
                    <input
                        type="text"
                        name="video"
                        value={editedVideo.video}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Descripción:
                    <textarea
                        name="descripcion"
                        value={editedVideo.descripcion}
                        onChange={handleChange}
                    />
                </label>
                <div className={styles.modalButtons}>
                    <button onClick={handleSave}>Guardar</button>
                    <button onClick={closeModal}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
