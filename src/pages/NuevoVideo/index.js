// NuevoVideo.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './NuevoVideo.module.css';

const NuevoVideo = () => {
    const [categorias, setCategorias] = useState([]);
    const [nuevoVideo, setNuevoVideo] = useState({
        titulo: '',
        imagen: '',
        descripcion: '',
        categoria: '',
        video: ''
    });

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const response = await axios.get('https://my-json-server.typicode.com/karina105/AluraFlix-api/videos');
                const uniqueCategorias = [...new Set(response.data.map(video => video.categoria))];
                setCategorias(uniqueCategorias);
            } catch (error) {
                console.error('Error fetching categorias:', error);
            }
        };

        fetchCategorias();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevoVideo((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://my-json-server.typicode.com/karina105/AluraFlix-api/videos', nuevoVideo);
            console.log('Nuevo video guardado:', nuevoVideo);
            setNuevoVideo({
                titulo: '',
                imagen: '',
                descripcion: '',
                categoria: '',
                video: ''
            });
            alert('¡El video ha sido creado exitosamente!');
        } catch (error) {
            console.error('Error al guardar el video:', error);
            alert('Hubo un error al intentar guardar el video.');
        }
    };

    const handleReset = () => {
        setNuevoVideo({
            titulo: '',
            imagen: '',
            descripcion: '',
            categoria: '',
            video: ''
        });
    };

    return (
        <div className={styles.nuevoVideoContainer}>
            <header className={styles.cabeceraFormulario}>
                <h1 className={styles.tituloCabecera}>NUEVO VIDEO</h1>
                <p className={styles.parrafoCabecera}>
                    COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO
                </p>
            </header>
            <form className={styles.formulario} onSubmit={handleSubmit} onReset={handleReset}>
                <div className={styles.campo}>
                    <h2 className={styles.tituloForm}>Crear Tarjeta</h2>
                </div>
                <div className={styles.sectionFormulario}>
                    <div className={styles.formizquierdo}>
                        <div className={styles.campo}>
                            <label className={styles.label}>Título</label>
                            <input
                                className={styles.input}
                                type="text"
                                name="titulo"
                                placeholder="Ingrese el titulo"
                                value={nuevoVideo.titulo}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.campo}>
                            <label className={styles.label}>Imagen</label>
                            <input
                                className={styles.input}
                                type="text"
                                name="imagen"
                                placeholder="URL de la imagen"
                                value={nuevoVideo.imagen}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.campo}>
                            <label className={styles.label}>Descripción</label>
                            <textarea
                                className={styles.textarea}
                                name="descripcion"
                                placeholder="¿De qué se trata el video?"
                                value={nuevoVideo.descripcion}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className={styles.formDerecho}>
                        <div className={styles.campo}>
                            <label className={styles.label}>Categoría</label>
                            <select
                                className={styles.input}
                                name="categoria"
                                value={nuevoVideo.categoria}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Seleccione la categoría</option>
                                {categorias.map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.campo}>
                            <label className={styles.label}>Video</label>
                            <input
                                className={styles.input}
                                type="text"
                                name="video"
                                placeholder="URL del video"
                                value={nuevoVideo.video}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.buttonVideo}>
                    <button className={styles.buttonGuardar} type="submit">Guardar</button>
                    <button className={styles.buttonLimpiar} type="reset">Limpiar</button>
                </div>
            </form>
        </div>
    );
};

export default NuevoVideo;
