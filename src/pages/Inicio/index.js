import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardVideo from '../components/CardVideo';

const InicioPage = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://my-json-server.typicode.com/karina105/AluraFlix-api/videos/');
                setVideos(response.data);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchData();
    }, []);

    const handleDeleteVideo = (videoId) => {
        setVideos(videos.filter((video) => video.id !== videoId));
    };

    const categorias = videos.reduce((acc, video) => {
        const categoriaExistente = acc.find((cat) => cat.categoriaNombre === video.categoria);
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

    return (
        <div className="inicio-page">
            <h1>Página de Inicio</h1>
            {categorias.map((categoria) => (
                <div key={categoria.categoriaNombre} className="categoria">
                    <h2>{categoria.categoriaNombre}</h2>
                    <div className="videos">
                        {categoria.videos.map((video) => (
                            <CardVideo key={video.id} video={video} onDelete={handleDeleteVideo} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InicioPage;
