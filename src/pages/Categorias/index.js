import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardVideo from '../components/CardVideo';
import styles from "./Categorias.module.css"

const CategoriasPage = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://my-json-server.typicode.com/karina105/AluraFlix-api/categorias');
                setCategorias(response.data);
            } catch (error) {
                console.error('Error fetching categorias:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="categorias-page">
            <h1>Categorías</h1>
            {categorias.map((categoria) => (
                <div key={categoria.id} className="categoria">
                    <h2 className={styles.nombre} style={{ backgroundColor: categoria.categoriaColor }}>{categoria.categoriaNombre}</h2>
                    <p>{categoria.categoriaTexto}</p>
                    <div className="videos">
                        {categoria.videos.map((video) => (
                            <CardVideo key={video.id} video={video} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CategoriasPage;
