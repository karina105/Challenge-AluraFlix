import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardVideo from 'components/Cards';
import styles from './Categorias.module.css';

const CategoriasPage = () => {
    const [categorias, setCategorias] = useState([]);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const responseCategorias = await axios.get('https://my-json-server.typicode.com/karina105/AluraFlix-api/categorias');
                setCategorias(responseCategorias.data);
            } catch (error) {
                console.error('Error fetching categorias:', error);
            }
        };

        const fetchVideos = async () => {
            try {
                const responseVideos = await axios.get('https://my-json-server.typicode.com/karina105/AluraFlix-api/videos');
                setVideos(responseVideos.data);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchCategorias();
        fetchVideos();
    }, []);

    const getVideosByCategoria = (categoriaId) => {
        return videos.filter(video => video.categoriaId === categoriaId);
    };

    return (
        <div className="categorias-page">
            <h1>Categorías</h1>
            {categorias.map((categoria) => (
                <div key={categoria.id} className="categoria">
                    <h2 className={styles.nombre} style={{ backgroundColor: categoria.categoriaColor }}>{categoria.categoriaNombre}</h2>
                    <p>{categoria.categoriaTexto}</p>
                    <div className="videos">
                        {getVideosByCategoria(categoria.id).map((video) => (
                            <CardVideo key={video.id} video={video} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategoriasPage;
